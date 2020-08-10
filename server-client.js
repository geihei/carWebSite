const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()

function resolve(dir) {
    return path.join(__dirname, '', dir)
}

app.use(express.static(resolve('./dist')))

app.get('/web', function(req, res) {
    const html = fs.readFileSync(resolve('./dist/web.html'), 'utf-8')
    res.send(html)
})
app.get('/web/*', function(req, res) {
    const html = fs.readFileSync(resolve('./dist/web.html'), 'utf-8')
    res.send(html)
})

app.get('/h5', function(req, res) {
    const html = fs.readFileSync(resolve('./dist/h5.html'), 'utf-8')
    res.send(html)
})
app.get('/h5/*', function(req, res) {
    const html = fs.readFileSync(resolve('./dist/h5.html'), 'utf-8')
    res.send(html)
})

app.get('/demo', function(req, res) {
    const html = fs.readFileSync(resolve('./dist/demo.html'), 'utf-8')
    res.send(html)
})
app.get('/demo/*', function(req, res) {
    const html = fs.readFileSync(resolve('./dist/demo.html'), 'utf-8')
    res.send(html)
})

app.listen(8082, () => {
    console.log(`server started at localhost:8082`)
})
