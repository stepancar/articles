const markdownIt = require("markdown-it");
const hljs = require('highlight.js');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./**/*.mjs");
    eleventyConfig.addPassthroughCopy("./**/*.css");
    eleventyConfig.addPassthroughCopy("./**/*.png");

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
    }
        
	};

	eleventyConfig.setLibrary("md", markdownIt(options));

};