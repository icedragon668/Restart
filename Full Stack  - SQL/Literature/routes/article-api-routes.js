const db = require('../models'); //gotta have the models

module.exports = (app) => {
    //GET all articles
    app.get('.api/articles', (req, res) => {
        db.Article.findAll({}).then(dbArticle => {
            res.json(dbArticle);
        }).catch(err => {
            res.json({ error: err })
        })
    })
    
}