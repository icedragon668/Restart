$(5).test(6)

const canvas = document.getElementById("canvas")
const conn = document.getElementById('conn')

//not reactive, needs an "on-resize" or similar
const canvasSizer = function () {
    canvas.style.height = window.innerHeight-1+'px'
    canvas.style.width = window.innerWidth-1+'px'
}

//it occurs to me now, that i don't need this
//it could all be done with canvas >.>
//oh well, gonna do it this way anyway :
const connSizer = function () {
    conn.style.height = (window.innerHeight-1)/3+"px"
    conn.style.width = (window.innerWidth-21)+"px"
}


canvasSizer()
connSizer()