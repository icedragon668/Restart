//a basic server

//Dependencies
const express = require('express');
const path = require('path')

const app = express()

const PORT = 8080

//Data
const kori = {
    name: 'Kori',
    role: 'Lead Coder',
}

const family = [{
    id: 1,
    name: 'Kori',
    role: "Daddy",
    trait: "Fun"
},{
    id: 2,
    name: 'Becky',
    role: 'Mommy',
    trait: 'Sleepy'
},{
    id: 3,
    name: 'Zelda',
    role: 'Kiddy',
    trait: 'Silly'
}]

//Routes
app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.get('/other', function(req, res){
    res.sendFile(path.join(__dirname, "public/other.html"))
})

app.get('/directory', (req,res)=>{
    res.send('Welcome to the Directory!')
})

app.get('/kori', (req,res)=>{
    res.json(kori)
})

app.get('/api/family', (req,res)=>{ return res.json(family)})

app.get('/api/family/:member', (req,res)=>{
    const chosen = req.params.member
    if (chosen <= family.length){
        res.json(family[chosen])
    }
    return res.send("Not Found")
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

app.get('/', function (req, res) {
    res.send('Hello World!')
})

//Listener
app.listen(PORT, function () {
    console.log(`Server listenting on PORT: ${PORT}`)
})