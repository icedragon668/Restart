const main = function (s) {

    const nl = document.querySelectorAll(s)

    write = (c, type) => {
        switch (type) {
            case "add": {
                nl.forEach(e => { e.innerHTML += c })
                break
            }
            default: {
                nl.forEach(e => { e.innerHTML = c })

            }
        }
    }

    on = (a, cb) => {
        nl.forEach(e => {
            e.addEventListener(a, cb)
        })
    }

    val = (c) => {
        if (c) {
            nl[0].value = c
        } else {
            return nl[0].value
        }
    }

    return {
        nl,
        write,
        on,
        val
    }
}

const APIKey = '166a433c57516f51dfab1f7edaed8413';
let place = "san+fransisco,usa"
let baseURL = `https://api.openweathermap.org/data/2.5/weather?q=`;

//this is not really a reusable function
const findWeather = function (e) {
    e.preventDefault();
    
    place = main('#place').val().trim()
    console.log(place)

    let queryURL = `${baseURL}${place}&appid=${APIKey}`
        fetch(queryURL)
        .then(res => res.json()) //should i return? why or !why ?
        .then(res => {
            main("#places").write(`
            <div id="head"></div>
            <div id="main"></div>
            `)

            main("#head").write(`
            <h1>${res.name}<h1>`, 'add')

            main('#main').write(`
            <ul>
            <li>temp: ${res.main.temp}K</li>
            <li>pressure: ${res.main.pressure}</li>
            <li>humidity: ${res.main.humidity}</li>
            </ul>`, 'add')

            const tempC = (res.main.temp - 273.15)
            const tempF = tempC * 1.80 + 32

            main('#main').write(`
            <br>
            <p>temp is ${Math.round(tempF)}F</p>
            <p>and ${Math.round(tempC)}C</p>`,'add')
            console.log(res)
        })
        .catch(function (err) {
            console.log(err)
        })
}

const places = [
    'atlanta',
    "phoenix",
    'new+york',
    'los+angeles',
    'tampa',
    'boise'
]

    places.forEach(e=>{
         e = e + ",usa"
         
         }) //stray code, for the api call(s)

//I wanted to wrap the fetch in a const, work with a promise,
//  then use async/await
//  need to get better with await functions
main('#find').on('click', findWeather) //botton works once?t 