/* Code for data.json on the server
let tableList = require('../data/table-list')
let waitingList = require('../data/waiting-list')

module.exports = (app) => {
    app.get('/api/waitinglist', (req,res) => { res.json(waitingList) })
    app.get('/api/tables', (req,res) => { res.json(tableList) })

    /
    when a table gets POSTed, check to see if there are < 5
    yes: req goes to tables
    no: req goes to waiting
    /
    app.post('/api/tables', (req, res) => {
        if (tableList.length < 5) {
            tableList.push(req.body)
        } else {
            waitingList.push(req.body)
        }
        res.end()
    })
}
End Code for data.json */

// Code for SQL database

//import models
const db = require('../data/models')

module.exports = (app) => {

    //API Requests

    //GET reservations
    //findAll
    app.get('/api/reservations', (req, res) => {
        db.Reservation.findAll({})
            .then((data) => { res.json(data) })
            .catch((err) => { res.json({ error: err }) })
    })

    //find by id
    app.get('/api/reservations/:id', (req, res) => {
        db.Reservation.find({ where: { id: req.params.id } })
            .then((data) => res.json(data))
            .catch((err) => res.json({ error: err }))
    })

    //POST Reservations
    app.post('/api/reservations', (req, res) => {
        db.Reservation.create(req.body)
            .then(() => res.json({ success: true }))
            .catch((err) => res.json({ error: err }))
    })

    //PUT Reservations
    app.put('/api/reservations/:id', (req, res) => {
        db.Reservation.update(
            req.body,
            { where: { id: req.params.id } })
            .then(() => res.json({ success: true }))
            .catch((err) => res.json({ error: err }))
    })
}