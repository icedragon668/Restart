//import express (and path)
const express = require('express')
const path = require('path')

const app = express();

//Port for deploy/dev
const PORT = process.env.PORT || 8080;

//parser req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//path to public files
app.use(express.static(path.join(__dirname, 'public')));

//Routes
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

//database sync
const db = require('./data/models');
db.sequelize.sync().then(() => {

    //starts server if sync success
    app.listen(PORT, function () {
        console.log(`Listening on Port ${PORT}`)
    })
})