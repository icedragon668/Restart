//a basic server

//Dependencies
const express = require('express');
const path = require('path')

const app = express()

const PORT = 8080

//Data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Data
const kori = {
    name: 'Kori',
    role: 'Lead Coder',
}

const family = [{
    name: 'Kori',
    role: "Daddy",
    trait: "Fun"
}, {
    name: 'Becky',
    role: 'Mommy',
    trait: 'Sleepy'
}, {
    name: 'Zelda',
    role: 'Kiddy',
    trait: 'Silly'
}]

//Routes
//GET reqs
app.get('/home', (req, res) => { 
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.get('/other', (req, res) => {
    res.sendFile(path.join(__dirname, "public/other.html"))
})

app.get('/directory', (req, res) => {
    res.send('Welcome to the Directory!')
})

app.get('/kori', (req, res) => { res.json(kori) })

app.get('/api/family', (req, res) => { res.json(family) })

app.get('/api/family/:member', (req, res) => {
    const name = req.params.member
    family.forEach(e => {
        if (e.name === name) {
            return res.json(e)
        } else {
            return res.send('Not Found')
        }
    })
    /*
    Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

    This is a Node.js error. it has to do with how res is handled. short of excpetions or not using express, it is as it is

    that said, writing an excpetion sounds like a good advancment!
    */
})

app.get('/author', (req, res) => {
    res.send('Written by Kori')
})

app.get('/date', (req, res) => {
    let date = new Date()
    let m = date.getMonth() + 1
    let d = date.getDate() + 1
    res.send(`Today is day ${d} of month ${m}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//POST reqs
app.post("/other", (req,res)=>{
    family.push(req.body);
    res.json(req.body)
})

//PUT reqs
app.put('/other/:member', (req,res) => { //how do i add params again?
    const updateMember = req.params.member
    let found = false

    for (i = 0; i < family.length; i++) {
        if (updateMember === family[i].name) {
            family.splice(i, 1, req.body)
            found = true
        }
    }
    if (found) {
        return res.json(req.body)
    }

    return res.json(false)
})

//Listener
app.listen(PORT, () => {
    console.log(`Server listenting on PORT: ${PORT}`)
})