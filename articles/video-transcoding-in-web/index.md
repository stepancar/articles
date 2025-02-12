---
layout: article.njk
title: video transcoding in web
shortDescription: This article considers challenges of video transcoding in web
creationDate: 2025-02-11
---

# Video transcoding in web

We are going to find best solution for video transcoding

## Что такое [FFmpeg](https://www.ffmpeg.org/) 
Комплексное кроссплатформенное опенсорс решение для записи, преобразования и потоковой передачи аудио и видео. 

```commandline
ffmpeg -i input.mp4 output.avi
```

Можно использовать как и утилиту командной строки, так и использовать скомпилированные библиотеки


## Установка ffmpeg
FFmpeg предоставляет только исходный код. Его можно скачать с официального [сайта](https://www.ffmpeg.org/)

На случай если нужны скомпилированные библиотеки, то на этот случай есть энтузиасты (ссылки на них тоже есть на официальном сайте на странице dowload).
Ссылка с архивами релизов (скомпилированные библиотеки имеют пометку "-shared" в названии) ffmpeg для [Linux/Windows](https://github.com/BtbN/FFmpeg-Builds/releases), для [MacOS](https://evermeet.cx/ffmpeg/)

На случай если нужны бинарники, то благо тоже есть энтузиасты.

* Для Ubuntu
```commandline
sudo apt update
sudo apt install ffmpeg
```

* Для Windows
```commandline
winget install ffmpeg
```
Возможно будут проблемы, потому что я запускал эту команду раза 3-4 и каждый раз установка не доходила до конца и зависала где-то на трети.
Можете воспользоваться [ссылкой](https://github.com/GyanD/codexffmpeg/releases/download/7.1/ffmpeg-7.1-full_build.zip) с которой команда и скачивает ffmpeg  
**!Важно!**  
Нужно будет добавить путь к бинарникам в переменную **Path**

  
* Для мака [тут](https://evermeet.cx/ffmpeg/)


### Несколько источников откуда можно взять видеофайлы для расчёта метрик
- https://www.sample-videos.com/
- https://file-examples.com/index.php/sample-video-files/sample-mp4-files/

## Полезные источники
- https://www.w3.org/2021/03/media-production-workshop/talks/qiang-fu-video-transcoding.html#intro
- https://github.com/leandromoreira/ffmpeg-libav-tutorial?tab=readme-ov-file#video---what-you-see
- https://habr.com/ru/companies/edison/articles/495614/
- https://github.com/FFmpeg/web
- https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API
- 