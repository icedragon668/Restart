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

    //API Requests: Reservations

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
    /* Old Method, See Below for Current
    app.post('/api/reservations', (req, res) => {
        db.Reservation.create(req.body)
            .then(() => res.json({ success: true }))
            .catch((err) => res.json({ error: err }))
    }) */

    //PUT Reservations
    app.put('/api/reservations/:id', (req, res) => {
        db.Reservation.update(
            req.body,
            { where: { id: req.params.id } })
            .then(() => res.json({ success: true }))
            .catch((err) => res.json({ error: err }))
    })

    //DELETE Reservations
    /* Old Method, See Below for Current
    app.delete('/api/reservations/:id', (req, res) => {
        db.Reservation.destroy({ where: { id: req.params.id } })
            .then((data) => res.json(data))
            .catch((err) => res.json({ error: err }))
    }) */

    //API Requests: WaitingList

    //GET
    app.get('/api/waitinglist', (req, res) => {
        db.WaitingList.findAll({})
            .then((data) => { res.json(data) })
            .catch((err) => { res.json({ error: err }) })
    })

    //PUT
    app.put('api/waitinglist/:id', (req, res) => {
        db.WaitingList.update(
            req.body,
            { where: { id: req.params.id } })
            .then(() => { res.json({ success: true }) })
            .catch((err) => { res.json({ error: err }) })
    })

    //DELETE
    app.delete('api/waitinglist/:id', (req, res) => {
        db.WaitingList.destroy({ where: { id: req.params.id } })
            .then(() => res.json({ success: true }))
            .catch((err) => res.json({ error: err }))
    })

    //MODIFIED RESERVATIONS DELETE
    //deletes a reservation, then moves a waitinglist to reservation
    app.delete('api/reservations/:id', (req, res) => {
        db.Reservation.destroy({ where: { id: req.params.id } })
            .then(() => {
                db.WaitingList.findAll({}).then((data) => {
                    const firstTable = {
                        name: data[0].name,
                        phoneNumber: data[0].phoneNumber,
                        email: data[0].email
                    }
                    const firstID = data[0].id
                    db.Reservation.create(firstTable).then(() => {
                        db.WaitingList.destroy({ where: { id: firstID } })
                            .then(() => { res.json({ success: true }) })
                    })
                })
            })
            .catch((err) => { res.json({ error: err }) })
    })

    //MODIFIED RESERVATIONS POST
    //checks for a list of 5, if < 5 then reservation, else waitinglist
    app.post('/api/reservations', (req, res) => {
        db.Reservation.findAll({}).then((data) => {
            if (data.length < 5) {
                db.Reservation.create(req.body)
            } else {
                db.WaitingList.create(req.body)
            }
        }).catch((err)=>{ res.json({ error: err }) })
    })
}