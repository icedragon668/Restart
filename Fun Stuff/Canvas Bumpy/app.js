/*first  run with notes
//preps an image to be loaded to canvas
let img = new Image();
img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
img.onload = function () { window.requestAnimationFrame(gameLoop) }

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

// function init() {
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
    // drawFrame(0, 0, 0, 0) //sprite 1, pos 1
    // window.requestAnimationFrame(step);
    /*
    drawFrame(0, 0, 0, 0) //sprite 1, pos 1
    drawFrame(1, 0, sWidth, 0); //sprite 2, pos 2
    drawFrame(0, 0, sWidth * 2, 0); //sprite 1, pos 3
    drawFrame(2, 0, sWidth * 3, 0); //sprite 3, pos 4
    */
// }

/*
//variables for animation
const cycleLoop = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
const frameLimit = 12;
//facing variables
const faceDown = 0;
const faceUp = 1;
const faceLeft = 2;
const faceRight = 3;
let currentDirection = faceDown; //this works in large part becaus e of the spritemap being well set up

//key listeners for controls
let keyPresses = {};

window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(e){
    keyPresses[e.key] = true
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(e){
    keyPresses[e.key] = false
}

//movement variables
const moveSpeed = 1;
let posX = 0;
let posY = 0;

function gameLoop() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    let hasMoved = false

    /*refactored due to movement
    frameCount++;
    if (frameCount < 15) { //counts 15 frames before next image
        //go again!
        window.requestAnimationFrame(gameLoop)
        return;
    }
    frameCount = 0
    ctx.clearRect(0, 0, canvas.width, canvas.height) //clears canvas
    drawFrame(cycleLoop[currentLoopIndex], currentDirection, 0, 0) //loops sprite 1,2,1,3 at pos 1
    currentLoopIndex++; //cycle increment
    
    //checks to see if walk loop is ended
    if (currentLoopIndex >= cycleLoop.length) {
        currentLoopIndex = 0;
        currentDirection++;
    }

    //direction loop
    if (currentDirection >= 4) {
        currentDirection = 0;
    }
    refactored due to movement*/
/*
    //movement controls
    if (keyPresses.w) {
        posY -= moveSpeed
        currentDirection = faceUp
        hasMoved = true
    } else if (keyPresses.s) {
        posY += moveSpeed
        currentDirection = faceDown
        hasMoved = true
    }
    if (keyPresses.a) {
        posX -= moveSpeed
        currentDirection = faceLeft
        hasMoved = true
    } else if (keyPresses.d) {
        posX += moveSpeed
        currentDirection = faceRight
        hasMoved = true
    }

    if (hasMoved) {
        frameCount++
        if (frameCount >= frameLimit) {
            frameCount = 0
            currentLoopIndex++
            if(currentLoopIndex >= cycleLoop.length){
                currentLoopIndex = 0
            }
        }
    }

    drawFrame(cycleLoop[currentLoopIndex],currentDirection, posX, posY)
    window.requestAnimationFrame(gameLoop)
}
first  run with notes*/
const greenGuy = {
    scale: 2,
    width: 16,
    height: 18,
    sWidth: this.scale * this.width,
    sHeight: this.scale * this.height,
    cycleLoop: [0,1,0,2],
    fDown: 0,
    fUp: 1,
    fLeft: 2,
    fRight: 3,
    frameLimit: 12,
    moveSpeed: 1,
    currentDirection: 0,
    currentLoopIndex: 0,
    frameCount: 0,
    posX: 0,
    posY: 0
}

////REFACTOR TIME///
//let's clean up a bit...

const scale = 2;
const width = 56;
const height = 58;
const sWidth = width * scale
const sHeight = height * scale
const cycleLoop = [0, 1, 0, 2];
const fDown = 0;
const fUp = 1;
const fLeft = 2;
const fRight = 3;
const frameLimit = 12;
const moveSpeed = 1;

let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let keyPresses = {};

let currentDirection = fDown;
let currentLoopIndex = 0;
let frameCount = 0;
let posX = 0;
let posY = 0;
let img = new Image();

window.addEventListener('keydown', keyDownListener, false);
function keyDownListener(e){
    keyPresses[e.key] = true
}

window.addEventListener('keyup', keyUpListener, false);
function keyUpListener(e){
    keyPresses[e.key] = false
}

function loadImage() {
    // img.src = 'https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png'
    img.src = '../../Assests/Images/mother3.png'
    img.onload = function () { window.requestAnimationFrame(gameLoop) }
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
        frameX * width, frameY * height, width, height,
        canvasX, canvasY, sWidth, sHeight
    );
}

loadImage()

function gameLoop() {
    ctx.clearRect(0,0,canvas.width, canvas.height)
    let hasMoved = false
    if (keyPresses.w) {
        moveChar(0,-moveSpeed,fUp)
        hasMoved = true
    } else if (keyPresses.s) {
        moveChar(0,moveSpeed,fDown)
        hasMoved = true
    }
    if (keyPresses.a) {
        moveChar(-moveSpeed,0,fLeft)
        hasMoved = true
    } else if (keyPresses.d) {
        moveChar(moveSpeed,0,fRight)
        hasMoved = true
    }

    if (hasMoved) {
        frameCount++
        if (frameCount >= frameLimit) {
            frameCount = 0
            currentLoopIndex++
            if(currentLoopIndex >= cycleLoop.length){
                currentLoopIndex = 0
            }
        }
    }
    if (!hasMoved){currentLoopIndex=0}
    drawFrame(cycleLoop[currentLoopIndex],currentDirection, posX, posY)
    window.requestAnimationFrame(gameLoop)
}

//moveChar is pulled put for collision detection
function moveChar (deltaX, deltaY, direction) {
    if (posX + deltaX > 0 && posX + sWidth + deltaX < canvas.width){
    posX += deltaX
    }

    if (posY + deltaY > 0 && posY + sHeight + deltaY < canvas.height){
    posY += deltaY
    }

    currentDirection = direction
}
