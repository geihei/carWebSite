const Vue = require('vue');
const server = require('express')();

const template = require('fs').readFileSync('./src/index.template.html', 'utf-8');

const renderer = require('vue-server-renderer').createRenderer({
    template,
});

const context = {
    title: 'vue ssr',
    meta: `
        <meta name="keyword" content="vue,ssr">
        <meta name="description" content="vue srr demo">
    `,
};

server.get('*', (req, res) => {
    const app = require('./src/web/app.js')

    renderer.renderToString(app, context, (err, html) => {
        console.log(html);
        if (err) {
            console.log(err)
            res.status(500).end('Internal Server Error')
            return;
        }
        res.send(html);
    });
})

const port = process.env.PORT || 8080
server.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})
