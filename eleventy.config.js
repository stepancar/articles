const markdownIt = require("markdown-it");
const hljs = require('highlight.js');
const sass = require("sass");
const path = require("node:path");
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const mathjaxPlugin = require("eleventy-plugin-mathjax");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(mathjaxPlugin);
    eleventyConfig.addTemplateFormats("scss");
    eleventyConfig.addPassthroughCopy("./articles/**/*.mjs");
    eleventyConfig.addPassthroughCopy("./articles/**/*.webp");
    eleventyConfig.addPassthroughCopy("./articles/**/*.json");
    eleventyConfig.addPassthroughCopy("./articles/**/*.js");
    eleventyConfig.addPassthroughCopy("./articles/**/*.wasm");
    eleventyConfig.addPassthroughCopy("./articles/**/*.css");
    eleventyConfig.addPassthroughCopy("./articles/**/*.png");
    eleventyConfig.addPassthroughCopy("./articles/**/*.jpeg");
    eleventyConfig.addPassthroughCopy("./articles/**/*.jpg");
    eleventyConfig.addPassthroughCopy("./articles/**/*.mp4");
    eleventyConfig.addPassthroughCopy("./articles/**/*.webm");
    eleventyConfig.addPassthroughCopy("./articles/**/*.pdf");
    eleventyConfig.addPassthroughCopy("./articles/**/*.html");
    eleventyConfig.addPassthroughCopy("./articles/**/*.mov");
    eleventyConfig.addPassthroughCopy("./articles/**/*.cube");
    eleventyConfig.addPassthroughCopy("./styles/**/*.css");

    eleventyConfig.addExtension("scss", {
      outputFileExtension: "css", // optional, default: "html"
  
      // can be an async function
      compile: function (inputContent, inputPath) {
        let parsed = path.parse(inputPath);
  
        let result = sass.compileString(inputContent, {
          loadPaths: [
            parsed.dir || ".",
            this.config.dir.includes
          ]
        });
  
        return (data) => {
          return result.css;
        };
      }
    });

    eleventyConfig.addPlugin(pluginSyntaxHighlight)

    // Articles sorted by creationDate, newest first. Articles without a date go last.
    eleventyConfig.addCollection("articles", function (collectionApi) {
      return collectionApi
        .getAll()
        .filter((item) => item.data.layout === "article.njk")
        .sort((a, b) => {
          const aTime = a.data.creationDate ? new Date(a.data.creationDate).getTime() : 0;
          const bTime = b.data.creationDate ? new Date(b.data.creationDate).getTime() : 0;
          return bTime - aTime;
        });
    });

    // YAML dates are parsed as UTC midnight, so format in UTC to avoid an off-by-one day.
    eleventyConfig.addFilter("articleDate", function (value) {
      if (!value) return "";
      return new Date(value).toISOString().slice(0, 10);
    });
};