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

