---
layout: article.njk
title: "Почему DOM-дерево в DevTools лагает на страницах с тысячами CSS-переменных"
creationDate: 2026-10-22
---

Если на `:root` объявлено больше ~2000 CSS-переменных, дерево элементов во вкладке Elements
начинает заметно тормозить. Сильнее всего это видно в режиме inspect: включаете «стрелку»
(Select an element) и ведёте курсором по странице, а подсветка элементов и дерево заметно
отстают. Это типичная ситуация для дизайн-систем, которые выгружают все токены в custom
properties.

## Демка

[`demo/index.html`](demo/index.html) генерирует страницу с настраиваемым числом:

- CSS-переменных на `:root` (по умолчанию **1000**);
- DOM-элементов (по умолчанию **2000**).

Параметры можно передать в URL, например: `demo/index.html?vars=5000&nodes=2000`.

Как воспроизвести:

1. Откройте демку и DevTools → Elements.
2. Включите режим inspect (`Cmd+Shift+C` / `Ctrl+Shift+C`) и поводите курсором по
   квадратикам.
3. Поставьте `vars=0`, нажмите «Применить» и повторите: подсветка будет успевать за курсором.

## Причина

Каждая строка DOM-дерева может показывать бейджи `flex`, `grid`, `container`, `scroll-snap`.
Чтобы решить, какой бейдж показать, `ElementsTreeElement` для **каждого** узла запрашивает
полный computed style:

```ts
// front_end/panels/elements/ElementsTreeElement.ts
this.#layout = await node.domModel().cssModel().getLayoutPropertiesFromComputedStyle(nodeId);
```

`getLayoutPropertiesFromComputedStyle` вызывает `CSS.getComputedStyleForNode`, но использует из
ответа всего около восьми свойств: `display`, `container-type`, `scroll-snap-type`,
`grid-template-*` и anchor-свойства.

Бэкенд при этом отдаёт **все** вычисленные свойства (~486) и **все** custom properties
элемента:

```cpp
// third_party/blink/renderer/core/inspector/inspector_css_agent.cc
for (const auto& it : computed_style_info->GetVariables()) {
  (*style)->emplace_back(protocol::CSS::CSSComputedStyleProperty::create()
                             .setName(it.key)
                             .setValue(it.value->CssText())
                             .build());
}
```

Custom properties наследуются, поэтому переменные с `:root` попадают в ответ для каждого
элемента страницы. В итоге на каждый узел дерева приходит JSON на тысячи записей. Его нужно
сериализовать, передать по CDP, распарсить и превратить в `Map`. Всё это повторяется при
раскрытии узлов и при мутациях DOM.

### Почему хуже всего именно в режиме inspect

При наведении курсора на элемент Blink отправляет во фронтенд событие
`Overlay.nodeHighlightRequested` (`SearchingForNodeTool::NodeHighlightRequested` в
`inspect_tools.cc`). `DOMTreeWidget` подсвечивает этот узел в дереве и для этого раскрывает
**всех его предков**:

```ts
// front_end/panels/elements/DOMTreeWidget.ts
return !isCollapsible ||
    Boolean((input.currentHighlightedNode && isAncestorOf(node, input.currentHighlightedNode)) || ...
```

При раскрытии предка в дереве появляются строки для всех его детей. Каждая новая строка
запускает свой `CSS.getComputedStyleForNode` ради бейджей. Курсор постоянно переходит в новые
поддеревья, поэтому таких запросов становится очень много, и каждый тянет за собой все
переменные с `:root`.

## Замеры

Скрипт [`bench.mjs`](bench.mjs) делает тот же CDP-вызов, что и DOM-дерево, для 204 узлов в
headless Chrome:

| переменных на `:root` | свойств на узел | payload | время бэкенда |
|---|---|---|---|
| 0    | 486  | 4.4 MB | 45 ms  |
| 500  | 986  | 7.9 MB | 66 ms  |
| 2000 | 2486 | 19 MB  | 163 ms |
| 5000 | 5486 | 42 MB  | 392 ms |

Нагрузка растёт линейно с числом переменных. В таблице только время бэкенда: разбор JSON и
построение `Map` во фронтенде добавляются сверху.

```bash
node bench.mjs
```

## Как исправить

Фронтенду для бейджей не нужен полный computed style. Решение состоит из двух частей:

1. **Протокол / Blink.** Добавить в `CSS.getComputedStyleForNode` опциональный параметр,
   например `experimental optional array of string propertyNames`. Когда он передан, отдавать
   только запрошенные свойства и не обходить `GetVariables()`.
2. **devtools-frontend.** В `getLayoutPropertiesFromComputedStyle` передавать список нужных
   свойств. Кешировать результат для бейджей отдельно от полного computed style.

После этого цена бейджей перестанет зависеть от числа переменных. Даже без переменных payload
уменьшится примерно в 50 раз.

## Обходной путь для разработчиков сайтов

Пока исправления нет, можно не держать все токены на `:root`. Объявляйте переменные на
контейнерах, где они реально используются, или регистрируйте через `@property` с
`inherits: false` те токены, которым не нужно наследование.
