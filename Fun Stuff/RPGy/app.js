$(5).test(6)

const canvas = document.getElementById("canvas")
const conn = document.getElementById('conn')
const dia = document.getElementById('dialogue')

const wHeight = window.innerHeight
const wWidth = window.innerWidth

//not reactive, needs an "on-resize" or similar
const canvasSizer = function () {
    canvas.style.height = wHeight-1+'px'
    canvas.style.width = wWidth-1+'px'
}

//it occurs to me now, that i don't need this
//it could all be done with canvas >.>
//oh well, gonna do it this way anyway :
const connSizer = function () {
    conn.style.height = (wHeight-1)/3+"px"
    conn.style.width = (wWidth-21)+"px"
}

const diaSizer = function () {
    dia.style.height = (wHeight)/3.6+"px"
    dia.style.width = (wWidth-1)/3+"px"
}

canvasSizer()
connSizer()
diaSizer()