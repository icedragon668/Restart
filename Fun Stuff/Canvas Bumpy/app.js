//preps an image to be loaded to canvas
let img = new Image();
img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
img.onload = function () {init()}

//sets up canvas and context
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

//animation starts here!
function init() {
    console.log("y'all")
}