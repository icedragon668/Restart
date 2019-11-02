let tableList = require('../data/table-list')
let waitingList = require('../data/waiting-list')

module.exports = (app) => {
    app.get('/api/waitinglist', (req,res) => { res.json(waitingList) })
    app.get('/api/tables', (req,res) => { res.json(tableList) })

    app.post('/api/tables', (req, res) => {
        if (tableList.length < 5) {
            tableList.push(req.body)
        } else {
            waitingList.push(req.body)
        }
        res.end()
    })
}