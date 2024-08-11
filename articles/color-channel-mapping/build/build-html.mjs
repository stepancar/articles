import showdown from 'showdown';
import fm from 'front-matter';
import mustache from 'mustache';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const defaultPageData = {
    author: 'Stepan Mikhailiuk',
    translatorMarkdown: '',
    textDirection: '',
};


const markdownConverter = new showdown.Converter();
const template = fs.readFileSync('template.html').toString();

function exportAllLanguages({outputDir}) {
    // Read the metadata from all the markdown files.
    const pageDatas = [];
    // Filter out the README file. All the rest are contents of the page for different languages and such.
    const contentDir = './content';
    const markdownFiles = ['./src/index.md']
    for (const file of markdownFiles) {
        const content = fs.readFileSync(file, 'utf-8');

        const outFileName = path.basename(file, path.extname(file)) + '.html';

        const frontMatterParsed = fm(content);
        console.log(frontMatterParsed);

        const pageData = Object.assign(
            {},
            defaultPageData,
            frontMatterParsed.attributes,
            {markdown: frontMatterParsed.body, markdownFileName: file}
        );

        console.log(pageData);

        const html = createHtml(pageData);

        const outFilePath = path.join(outputDir, outFileName);
        fs.writeFileSync(outFilePath, html)
    }
}

function createHtml(pageData) {
    // Read in content
    const markdown = pageData.markdown;

    // Convert to html
    const htmlContent = markdownConverter.makeHtml(markdown);

    // Fill into template
    const view = Object.assign({}, pageData);
    view.content = htmlContent;

    const html = mustache.render(template, view);
    return html;
}


exportAllLanguages({outputDir: './'});