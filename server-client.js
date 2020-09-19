const fs = require('fs')
const path = require('path')
const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()

function resolve(dir) {
    return path.join(__dirname, '', dir)
}

function sendHtml(file) {
    return function (req, res) {
        const html = fs.readFileSync(resolve(file), 'utf-8')
        res.send(html)
    }
}

app
    .use(history({
        htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
        rewrites: [
            {
                from: /^\/\web\/.*|\/\web$/,
                to(context) {
                    return '/web'
                },
            },
            {
                from: /^\/\\h5\/.*|\/\\h5$/,
                to(context) {
                    return '/h5'
                },
            },
            {
                from: /^\/\demo\/.*|\/\demo$/,
                to(context) {
                    return '/demo'
                },
            },
        ],
    }))
    .use(express.static(resolve('./dist')))

app.get('/web', sendHtml('./dist/web.html'))
app.get('/h5', sendHtml('./dist/h5.html'))
app.get('/demo', sendHtml('./dist/demo.html'))

// todo 404页面处理 用户网址输入错误时友好提示
// app.get('*', sendHtml('./dist/404.html'))

app.listen(8082, () => {
    console.log('server started at localhost:8082')
})
