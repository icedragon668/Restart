const db = require('../models')

module.exports = (app) => {
    //GET all authors
    app.get('/api/authors', (req, res)=>{
        db.Author.findAll({})
        .then((dbAuthor)=>{ res.json({ dbAuthor }) })
    })

}