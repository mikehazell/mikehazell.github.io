const marked = require('marked');
const fs = require('fs');

const doc = fs.readFileSync('./src/index.md', 'utf8');
const tpl = fs.readFileSync('./src/template.html', 'utf8');

function makePage(mdString, template) {
    const compiled = marked(mdString);
    return template.replace('###CONTENT###', compiled);
}

fs.writeFileSync('index.html', makePage(doc, tpl));
