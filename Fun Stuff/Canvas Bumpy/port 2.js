//this is very different than what i previously had
//this is, at this point, copy and pasted
//now to try to understand the differences and integrate them
//like, where is the tile size?


//this seems pretty straight forward
var map = {
    cols: 12,
    rows: 12,
    tsize: 64, //tile size? used for both images?
    layers: [[
        3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
        3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 3,
        3, 1, 6, 6, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 6, 6, 1, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 3,
        3, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 3,
        3, 3, 3, 7, 1, 6, 3, 3, 3, 3, 3, 3
    ], [
        5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        4, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0, 7,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        4, 4, 4, 0, 5, 4, 4, 4, 4, 4, 4, 7,
        5, 8, 8, 0, 0, 8, 8, 8, 8, 8, 8, 5
    ]],
    getTile: function (layer, col, row) {
        return this.layers[layer][row * map.cols + col];
    },
    isSolidTileAtXY: function (x, y) {
        var col = Math.floor(x / this.tsize);
        var row = Math.floor(y / this.tsize);

        // tiles 3 and 5 are solid -- the rest are walkable
        // loop through all layers and return TRUE if any tile is solid
        return this.layers.reduce(function (res, layer, index) { //what's this reduce doing?
            var tile = this.getTile(index, col, row);
            var isSolid = tile === 3 || tile === 5;
            return res || isSolid; //it looks like it's just setting 3 and 5 to isSolid: true
        }.bind(this), false);
    },
    getCol: function (x) {
        return Math.floor(x / this.tsize);
    },
    getRow: function (y) {
        return Math.floor(y / this.tsize);
    },
    getX: function (col) {
        return col * this.tsize;
    },
    getY: function (row) {
        return row * this.tsize;
    }
};

//camera stuff
function Camera(map, width, height) {
    this.x = 0;
    this.y = 0;
    this.width = width;
    this.height = height;
    this.maxX = map.cols * map.tsize - width;
    this.maxY = map.rows * map.tsize - height;
}

Camera.prototype.follow = function (sprite) {
    this.following = sprite;
    sprite.screenX = 0;
    sprite.screenY = 0;
};

Camera.prototype.update = function () {
    // assume followed sprite should be placed at the center of the screen
    // whenever possible
    this.following.screenX = this.width / 2;
    this.following.screenY = this.height / 2;

    // make the camera follow the sprite
    this.x = this.following.x - this.width / 2;
    this.y = this.following.y - this.height / 2;
    // clamp values
    this.x = Math.max(0, Math.min(this.x, this.maxX));
    this.y = Math.max(0, Math.min(this.y, this.maxY));

    // in map corners, the sprite cannot be placed in the center of the screen
    // and we have to change its screen coordinates

    // left and right sides
    if (this.following.x < this.width / 2 ||
        this.following.x > this.maxX + this.width / 2) {
        this.following.screenX = this.following.x - this.x;
    }
    // top and bottom sides
    if (this.following.y < this.height / 2 ||
        this.following.y > this.maxY + this.height / 2) {
        this.following.screenY = this.following.y - this.y;
    }
};

function Hero(map, x, y) {
    this.map = map;
    this.x = x;
    this.y = y;
    this.width = map.tsize;
    this.height = map.tsize;

    this.image = Loader.getImage('hero');
}

Hero.SPEED = 256; // pixels per second

Hero.prototype.move = function (delta, dirx, diry) {
    // move hero
    this.x += dirx * Hero.SPEED * delta;
    this.y += diry * Hero.SPEED * delta;

    // check if we walked into a non-walkable tile
    this._collide(dirx, diry);

    // clamp values
    var maxX = this.map.cols * this.map.tsize;
    var maxY = this.map.rows * this.map.tsize;
    this.x = Math.max(0, Math.min(this.x, maxX));
    this.y = Math.max(0, Math.min(this.y, maxY));
};

Hero.prototype._collide = function (dirx, diry) {
    var row, col;
    // -1 in right and bottom is because image ranges from 0..63
    // and not up to 64
    var left = this.x - this.width / 2;
    var right = this.x + this.width / 2 - 1;
    var top = this.y - this.height / 2;
    var bottom = this.y + this.height / 2 - 1;

    // check for collisions on sprite sides
    var collision =
        this.map.isSolidTileAtXY(left, top) ||
        this.map.isSolidTileAtXY(right, top) ||
        this.map.isSolidTileAtXY(right, bottom) ||
        this.map.isSolidTileAtXY(left, bottom);
    if (!collision) { return; }

    if (diry > 0) {
        row = this.map.getRow(bottom);
        this.y = -this.height / 2 + this.map.getY(row);
    }
    else if (diry < 0) {
        row = this.map.getRow(top);
        this.y = this.height / 2 + this.map.getY(row + 1);
    }
    else if (dirx > 0) {
        col = this.map.getCol(right);
        this.x = -this.width / 2 + this.map.getX(col);
    }
    else if (dirx < 0) {
        col = this.map.getCol(left);
        this.x = this.width / 2 + this.map.getX(col + 1);
    }
};

Game.load = function () {
    return [
        Loader.loadImage('tiles', '../../assests/images/chipset01.jpg'),
        Loader.loadImage('hero', '../../assests/images/toon.png')
    ];
};

Game.init = function () {
    Keyboard.listenForEvents(
        [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN]);
    this.tileAtlas = Loader.getImage('tiles');

    this.hero = new Hero(map, 160, 160);
    this.camera = new Camera(map, 512, 512);
    this.camera.follow(this.hero);
};

Game.update = function (delta) {
    // handle hero movement with arrow keys
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
    else if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
    else if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
    else if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }

    this.hero.move(delta, dirx, diry);
    this.camera.update();
};

Game._drawLayer = function (layer) {
    var startCol = Math.floor(this.camera.x / map.tsize);
    var endCol = startCol + (this.camera.width / map.tsize);
    var startRow = Math.floor(this.camera.y / map.tsize);
    var endRow = startRow + (this.camera.height / map.tsize);
    var offsetX = -this.camera.x + startCol * map.tsize;
    var offsetY = -this.camera.y + startRow * map.tsize;

    for (var c = startCol; c <= endCol; c++) {
        for (var r = startRow; r <= endRow; r++) {
            var tile = map.getTile(layer, c, r);
            var x = (c - startCol) * map.tsize + offsetX;
            var y = (r - startRow) * map.tsize + offsetY;
            if (tile !== 0) { // 0 => empty tile
                switch (tile) {
                    case 1:
                        this.ctx.drawImage(
                            this.tileAtlas, //image
                            10 * 16, 10 * 16, //source x,y
                            16, 16, //source width, height
                            Math.round(x),
                            Math.round(y),
                            map.tsize,
                            map.tsize)
                        break
                    case 3:
                        this.ctx.drawImage(
                            this.tileAtlas, //image
                            10 * 16, 11 * 16, //source x,y
                            16, 16, //source width, height
                            Math.round(x),
                            Math.round(y),
                            map.tsize,
                            map.tsize)
                        break
                    case 4:
                        this.ctx.drawImage(
                            this.tileAtlas, //image
                            11 * 16, 10 * 16, //source x,y
                            16, 16, //source width, height
                            Math.round(x),
                            Math.round(y),
                            map.tsize,
                            map.tsize)
                        break
                    case 6:
                        this.ctx.drawImage(
                            this.tileAtlas, //image
                            11 * 16, 8 * 16, //source x,y
                            16, 16, //source width, height
                            Math.round(x),
                            Math.round(y),
                            map.tsize,
                            map.tsize)
                        break
                    case 7:
                        this.ctx.drawImage(
                            this.tileAtlas, //image
                            9 * 16, 10 * 16, //source x,y
                            16, 16, //source width, height
                            Math.round(x),
                            Math.round(y),
                            map.tsize,
                            map.tsize)
                        break
                    case 8:
                        this.ctx.drawImage(
                            this.tileAtlas, //image
                            10 * 16, 9 * 16, //source x,y
                            16, 16, //source width, height
                            Math.round(x),
                            Math.round(y),
                            map.tsize,
                            map.tsize)
                        break
                    case 5:
                        this.ctx.drawImage(
                            this.tileAtlas, //image
                            9 * 16, 8 * 16, //source x,y
                            16, 16, //source width, height
                            Math.round(x),
                            Math.round(y),
                            map.tsize,
                            map.tsize)
                        break
                    default:
                        this.ctx.drawImage(
                            //////
                            /*
                            */
                            /////
                            // /*
                            this.tileAtlas, // image
                            (tile - 1) * map.tsize, // source x
                            0, // source y
                            16, // source width  //changed from map.tsize / 16
                            16, // source height  //changed from map.tsize / 16
                            Math.round(x),  // target x
                            Math.round(y), // target y
                            map.tsize, // target width
                            map.tsize // target height
                            // */
                        )
                };
            }
        }
    }
};

// ctx.drawImage(
/*
this.tileAtlas, //image
20*16, 15*16, //source x,y
16, 16, //source width, height
Math.round(x),
Math.round(y),
map.tsize,
map.tsize
*/
// )

Game._drawGrid = function () {
    var width = map.cols * map.tsize;
    var height = map.rows * map.tsize;
    var x, y;
    for (var r = 0; r < map.rows; r++) {
        x = - this.camera.x;
        y = r * map.tsize - this.camera.y;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(width, y);
        this.ctx.stroke();
    }
    for (var c = 0; c < map.cols; c++) {
        x = c * map.tsize - this.camera.x;
        y = - this.camera.y;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x, height);
        this.ctx.stroke();
    }
};

Game.render = function () {
    // draw map background layer
    this._drawLayer(0);

    // draw main character
    this.ctx.drawImage(
        this.hero.image,
        this.hero.screenX - this.hero.width / 2,
        this.hero.screenY - this.hero.height / 2);

    // draw map top layer
    this._drawLayer(1);

    this._drawGrid();
};