# Задача
В этой статье я постараюсь рассказать о задаче перекрашивания медиа ресурса в цвета палитры.
И об одном из возможных решений этой задачи, называющимся color channel mapping.

Давайте представим, что мы делаем приложение для создания видео презентаций.
Для каждого слайда пользователь может выбрать анимацию, которая будет отображаться на заднем фоне.

Помимо самой анимации пользователь может выбрать цветовую палитру.
Для простоты, представим, что палитра состоит из 3-х цветов, сама анимация состоит из нескольких объектов, на стадии создания анимации дизайнер задает номер цвета из палитры для каждого объекта.
Встает вопрос, каким образом мы можем расскрасить анимацию в цвета палитры пользователя?


Эти анимации могут быть реализованы разными способами, однако мы рассмотрим 3 основных

1. Анимация, созданная кодом, который рисует некоторые элементы на 2d канвасе
1. SVG анимация
1. Анимация созданная в растровом редакторе и экспортированная как видео

### Анимации созданные с помощью кода

<iframe src="./src/index.html"></iframe>

Давайте представим что анимация сделана с помощью кода, который рисует на канвасе.
Например такая:

```typescript
function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}
```

Чтобы сделать анимацию перекрашиваемой, мы можем передавать палитру в функцию, а в коде использовать индексы цветов из палитры.
Например так:

```typescript
function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, colorPalette: [string, string, string]) {
  ctx.beginPath();
  ctx.fillStyle = colorPalette[0];
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}
```

Проблема таких анимаций в том, что их может создать только разработчик, без навыка программирования не обойтись.

### SVG

Давайте представим что анимация сделана с помощью svg
Например такая:

```xml
<?xml version="1.0"?>
<svg viewBox="0 0 60 60" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50"/>
</svg>
```

Дизайнер может разметить элементы так, чтобы мы могли знать какой номер цвета из палитры соответствует каждому элементу.
Например так:

```xml
<?xml version="1.0"?>
<svg viewBox="0 0 60 60" version="1.1"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="60" cy="60" r="50" fill="1"/>
</svg>
```

тогда функция, которая может перекрасить наш svg в нужные цвета может выглядеть так:

```typescript
function recolorSVG(svg, colorPalette: [string, string, string]) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(svg, "image/svg+xml");
  const elements = doc.querySelectorAll('[fill]');
  elements.forEach((element) => {
    const colorIndex = element.getAttribute('fill');
    element.setAttribute('fill', colors[colorIndex]);
  });
  return doc.documentElement.outerHTML;
}
```

К сожалению, несмотря на то, что стандард SVG SML существует очень давно, не многие дизайнерские инструменты могут похвастаться наличием возможности экспорта анимации в svg.

Тоесть, на самом деле, дизайнеру нужно так же иметь навыки программирования.

### Video

Для дизайнера проще всего создать анимацию в удобном ему инструменте и экспортировать как video.
Все интсрументы создания анимацй позволяют это.

Вставет вопрос, каким образом диайнер может разметить для нас элементы в этом видео, чтобы мы могли их перекрасить?
Можно попросить дизайнеров сделать это видео из 3х цветов - RGB

Такое видое может выглядеть так:

Вставет вопрос, как можно заменить такие цвета во время проигрывания видео

```javascript
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
function drawFrame(video) {
    ctx.drawImage(vide);

    const imageData = ctx.getImageData();
    replaceColors(imageData, colorPalette);

    ctx.putImageData(imageData)
}

function relaceColors(imageData, colorPalette) {
    for (let i = 0; i < imageData.length; i+=3) {
        const image = imageData[i];
        const r = imageData[i];
        const g = imageData[i+1];
        const b = imageData[i+2];

        
    }
}

function getNewColor(old, colorPalette) {
   return old;
}
```