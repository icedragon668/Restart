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

    //GET just one article, by id
    app.get('.api/articles/:id', (req, res) => {
        db.Article.findOne({
            where: {
                id: req.params.id
            }
        }).then(dbArticle => {
            res.json(dbArticle);
        }).catch(err => {
            res.json({ error: err })
        })
    })

    //POST a new article
    app.post(".api/articles", (req, res)=>{
        db.Article.create(req.body)
        .then((dbArticle)=>{ res.json(dbArticle)})
        .catch((err)=>{ res.json( {error: err }) })
    })

    //PUT to update an article
    app.put(".api/articles/:id", (req,res)=>{
        db.Article.update(
            req.body,
            { where: {
                id: req.params.id
            }}
        )
        .then((dbArticle)=> { res.json(dbArticle) })
        .catch((err)=>{ res.json({ error: err }) })
    })

    //DELETE to remove an article
    app.delete(".api/articles/:id", (req, res)=>{
        db.Article.destroy({
            
        })
    })
}