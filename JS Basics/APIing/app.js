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
let place = "atlanta,usa"
let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIKey}`;

fetch(queryURL)
    .then(res => res.json()) //should i return? why or !why ?
    .then(res => {
        main("header").write(`
        <h1>${res.name}<h1>`)
        main('main').write(`
        <ul>
        <li>temp: ${res.main.temp}K</li>
        <li>pressure: ${res.main.pressure}</li>
        <li>humidity: ${res.main.humidity}</li>
        </ul>`)
        const tempC = (res.main.temp - 273.15)
        const tempF = tempC*1.80 +32
        main('main').write(`
        <br>
        <p>temp is ${Math.round(tempF)}F</p>
        <p>and ${Math.round(tempC)}C</p>`
        ,"+")
        console.log(res)
    })
    .catch(function(err){
        console.log(err)
    })

//I wanted to wrap the fetch in a const, work with a promise,
//  then use async/await
//  need to get better with await functions
main('main').write("hey")