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
                from: /^\/.*$/,
                to(context) {
                    console.log(context)
                    return '/web'
                },
            },
        ],
    }))
    .use(express.static(resolve('./dist')))

app.get('/web', sendHtml('./dist/web.html'))
// app.get('/web/index', sendHtml('./dist/web.html'))
// app.get('/h5', sendHtml('./dist/h5.html'))
// app.get('/h5/*', sendHtml('./dist/h5.html'))
// app.get('/demo', sendHtml('./dist/demo.html'))
// app.get('/demo/*', sendHtml('./dist/demo.html'))

app.listen(8082, () => {
    console.log('server started at localhost:8082')
})
