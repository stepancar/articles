const markdownIt = require("markdown-it");
const hljs = require('highlight.js');
const sass = require("sass");
const path = require("node:path");

module.exports = function(eleventyConfig) {
    eleventyConfig.addTemplateFormats("scss");
    eleventyConfig.addPassthroughCopy("./articles/**/*.mjs");
    eleventyConfig.addPassthroughCopy("./articles/**/*.css");
    eleventyConfig.addPassthroughCopy("./articles/**/*.png");
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

  let options = {
    html: true,
    breaks: true,
    linkify: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(str, { language: lang }).value;
          } catch (__) {}
        }
    
        return ''; // use external default escaping
    },
	};

  

	eleventyConfig.setLibrary("md", markdownIt(options));

};