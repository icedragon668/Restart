//preps an image to be loaded to canvas
let img = new Image();
img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
img.onload = function () {init()}

//sets up canvas and context
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
const scale = 2;
const width = 16;
const height = 18;
const sWidth = width * scale
const sHeight = height * scale

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
   ctx.drawImage(img, 0, 0, width, height, 0, 0, sWidth, sHeight)
   ctx.drawImage(img, width, 0, width, height, sWidth, 0, sWidth, sHeight)
   ctx.drawImage(img, width*2, 0, width, height, sWidth*2, 0, sWidth, sHeight)
}