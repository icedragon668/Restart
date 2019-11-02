const express = require('express')
const path = require('path')

const app = express();

const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);

app.listen(PORT, function(){
    console.log(`Listening on Port ${PORT}`)
})