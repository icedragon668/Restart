//jQuery elimination function
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
            <p>and ${Math.round(tempC)}C</p>`, 'add')
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

places.forEach(e => {
    let queryURL = `${baseURL}${e},usa&appid=${APIKey}`
    fetch(queryURL).then(res => res.json()).then(res => console.log(res))
}) //useable for rendering, can push to array once input is clean

//I wanted to wrap the fetch in a const, work with a promise,
//  then use async/await
//  need to get better with await functions
// main('#find').on('click', findWeather) //botton works once?t 

/*
//Goals
button displays a city an info
"search" creates a button for ^
"search" is replaced with dropdown
"search" is RegEx friendly
"search" is verified pre api call

*/

// Event Listener Delegation

const eventDelegation = function() { //ha! this triggers the hack-around as is
    let e = 0
}

//maybe add this to an event class instead of the entire document?
//clutter the class a bit...
document.addEventListener('click', eventDelegation) //interestingly, this is beter for performance than individual listeners
//Event Listener Delegation//

const renderButton = function () {
    //empty button list
    main('.cityButtons').write('')
    //loop button list and create data-* buttons
    places.forEach(e => {
        main('.cityButtons').write(`
        <button class="city" data-name="${e}">
            ${e}
        </button>
        `, "add")
    })
    document.querySelectorAll(".city").forEach(e=>{
        e.addEventListener('click', renderCard)
    })
    /*
        <div id="cityButtons">
            <button class="city" data-name=""></button>
        </div>
    */
}

const renderCard = function () {
    console.log('here')
    //clear card
    main("#cityCard").write("")
    //set place
    //get the button dataset.name
    place = this.dataset.name
    //fetch city info
    fetch(`${baseURL}${place},usa&appid=${APIKey}`)
        //translate response
        .then(res => res.json())
        //render selected card
        .then(res => {
            main('#cityCard').write(`
        <h1>${res.name}</h1>
        `)
        })
    console.log("Render Card")
}

const cityVerify = function () {
    //does the api have a city to check against?
    console.log("City Verify")
}

const reListen = function () {
    if (document.querySelector(".city").dataset.name === undefined) {
        main('.city').on('click', renderCard)
    }
    main('.city').on('click', renderCard)
}

main('#find').on('click', renderButton);
main('.cityButtons').on('click', reListen)

cityVerify()


/* HTML Design
        <div id="cityCard">
            <h1 class="cityName"></h1>
            <ul class="cityData">
                <li class="pressure"></li>
                <li class="humidity"></li>
                <li class="tempK"></li>
                <li class="tempC"></li>
                <li class="tempF"></li>
            </ul>
        </div>
        <div id="cityButtons">
            <button class="city" data-name=""></button>
        </div>
        <div id="cityFind">
            <input type="text" id="place"><br>
            <input type="submit" id="find" value="search">
        </div>
        */