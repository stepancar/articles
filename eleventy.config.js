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
    eleventyConfig.addPassthroughCopy("./articles/**/*.pdf");
    eleventyConfig.addPassthroughCopy("./articles/**/*.html");
    eleventyConfig.addPassthroughCopy("./articles/**/*.mov");
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
};