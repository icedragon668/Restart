//a basic server

const express = require('express');

const app = express()

const PORT = 8080

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/author', function (req, res) {
    res.send('Written by Kori')
})

app.get('/date', function (req, res) {
    let date = new Date()
    let m = date.getMonth() + 1
    let d = date.getDate() + 1
    res.send(`Today is day ${d} of month ${m}`)
})

app.listen(PORT, function () {
    console.log(`Server listenting on PORT: ${PORT}`)
})