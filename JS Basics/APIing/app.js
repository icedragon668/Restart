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
    .then(function(res){
        main('main').write(res)
        console.log(res)
    })
    .catch(function(err){
        main('main').write(err)
    })


main('main').write('hey')