//preps an image to be loaded to canvas
let img = new Image();
img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
img.onload = function () {init()}

//sets up canvas and context
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')

//animation starts here!
function init() {
    /*drawImage Reminder:
    image source,
    start x coord,
    start y coord,
    start Width,
    start Height,
    destination (on canvas) x coord,
    dest y coord,
    dest width,
    dest height,
    */
   ctx.drawImage(img, 0, 0, 16, 18, 0, 0, 16, 18)
}