$(5).test(6)

const canvas = document.querySelector("canvas")
const conn = document.getElementById('conn')

//not reactive, needs an "on-resize" or similar
const canvasSizer = function () {
    canvas.height = window.innerHeight-1
    canvas.width = window.innerWidth-1
}

//it occurs to me now, that i don't need this
//it could all be done with canvas >.>
//oh well, gonna do it this way anyway :
const connSizer = function () {
    conn.style.height = (window.innerHeight-1)*0.3333
    // conn.style.width = window.innerWidth-1
}


canvasSizer()
connSizer()