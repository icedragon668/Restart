const main = function (s) {

    const nl = document.querySelectorAll(s)
    
    write = (c, type) => {
        switch (type) {
            case "+": {
                nl.forEach(e => { e.innerHTML += c })
                break
            }
            default: {
                nl.forEach(e => { e.innerHTML = c })

            }
        }
    }
    return {
        nl,
        write
    }
}

//API Block
const APIKey = '166a433c57516f51dfab1f7edaed8413';
let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=san+francisco,usa&appid=${APIKey}`;

fetch(queryURL)
    .then(res => res.json())
    .then(res => {
        main("header").write(`
        <h1>${res.name}<h1>`)
        main('main').write(`
        <ul>
        <li>temp: ${res.main.temp}</li>
        <li>pressure: ${res.main.pressure}</li>
        <li>humidity: ${res.main.humidity}</li>
        </ul>`)
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })

//I wanted to wrap the fetch in a const, work with a promise,
//  then use async/await
//  need to get better with await functions
main('main').write("hey")