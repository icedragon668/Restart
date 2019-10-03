$(5).test(6)

const canvas = document.querySelector("canvas")

//not reactive, needs an "on-resize" or similar
const canvasSizer = function () {
    canvas.height = window.innerHeight-1
    canvas.width = window.innerWidth-1
}

canvasSizer()