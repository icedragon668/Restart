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

main('main').write('hey')