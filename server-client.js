const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.resolve(__dirname, './dist')))

app.get('/web', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/web.html'), 'utf-8')
    res.send(html)
})
app.get('/web/*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/web.html'), 'utf-8')
    res.send(html)
})

app.get('/h5', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/h5.html'), 'utf-8')
    res.send(html)
})
app.get('/h5/*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/h5.html'), 'utf-8')
    res.send(html)
})

app.get('/demo', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/demo.html'), 'utf-8')
    res.send(html)
})
app.get('/demo/*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/demo.html'), 'utf-8')
    res.send(html)
})

app.listen(8082, () => {
    console.log(`server started at localhost:8082`)
})
