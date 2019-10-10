//preps an image to be loaded to canvas
let img = new Image();
img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
img.onload = function () { init() }

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
function drawFrame(frameX, frameY, canvasX, canvasY) {
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

    //animation requests
    drawFrame(0, 0, 0, 0) //sprite 1, pos 1
    window.requestAnimationFrame(step);
    /*
    drawFrame(0, 0, 0, 0) //sprite 1, pos 1
    drawFrame(1, 0, sWidth, 0); //sprite 2, pos 2
    drawFrame(0, 0, sWidth * 2, 0); //sprite 1, pos 3
    drawFrame(2, 0, sWidth * 3, 0); //sprite 3, pos 4
    */
}


//variables for animation
const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
    frameCount++;
    if (frameCount < 15) { //counts 15 frames before next image
        //go again!
        window.requestAnimationFrame(step)
        return;
    }
    frameCount = 0
    ctx.clearRect(0, 0, canvas.width, canvas.height) //clears canvas
    drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0) //loops sprite 1,2,1,3 at pos 1
    currentLoopIndex++; //cycle increment
    //checks to see if loop is ended
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0
    }
    window.requestAnimationFrame(step)
}