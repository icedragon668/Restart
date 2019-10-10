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
//simplifies drawImage to frames over pixels
function drawFrame (frameX, frameY, canvasX, canvasY){
    ctx.drawImage(img,
        //1 will use the first sprite image, eg
        //source
        frameX * width, frameY * height, width, height,
        //destination
        canvasX, canvasY, sWidth, sHeight
        );
}

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
   drawFrame(0,0,0,0) //sprite 1, pos 1
   drawFrame(1,0, sWidth, 0); //sprite 2, pos 2
   drawFrame(0,0, sWidth*2,0); //sprite 1, pos 3
   drawFrame(2,0, sWidth*3,0); //sprite 3, pos 4
}