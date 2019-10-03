$(5).test(6)

const canvas = document.querySelectorAll("canvas")

const canvasSizer = function () {
    canvas.innerHeight = window.innerHeight
    canvas.innerWidth = window.innerWidth
}

canvasSizer()