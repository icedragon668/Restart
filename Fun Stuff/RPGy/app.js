$(5).test(6)

const canvas = document.querySelector("canvas")

const canvasSizer = function () {
    canvas.height = window.innerHeight-2
    canvas.width = window.innerWidth-2
}

canvasSizer()