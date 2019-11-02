let tableList = require('../data/table-list')
let waitingList = require('../data/waiting-list')

module.exports = (app) => {
    app.get('/api/waitinglist', (req,res) => { res.json(waitingList) })
    app.get('/api/tables', (req,res) => { res.json(tableList) })
}