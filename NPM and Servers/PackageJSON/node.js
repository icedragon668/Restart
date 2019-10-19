const axios = require('axios')
// import axios from 'axios'; //what's the difference here?

const fs = require('fs')

//fs read from file
fs.readFile('items.txt', "utf8", function (e, d) {
    if (e) { return console.log(e) }
    console.log(d)

    const dList = d.split(',');
    console.log(dList)
})

//fs write to file
fs.writeFile('desktop.txt', 'get coffe, code js', function (err) {
    if (err) { return console.log(err) }

    console.log('file created')
    
})

