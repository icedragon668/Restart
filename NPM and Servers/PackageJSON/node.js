const axios = require('axios')
// import axios from 'axios'; //what's the difference here?

const fs = require('fs')

fs.readFile('items.txt', "utf8", function(e,d) {
    if (e){ return console.log(e) }
    console.log(d)

    const dList = d.split(',');
    console.log(dList)
})