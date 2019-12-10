"use strict";

let fs = require("fs");
let path = require("path");
let Sequelize = require("sequalize");
let basename = path.basename(module.filename); //???
let env = process.env.NODE_ENV || "development"; //node or dev
let config = require(__dirname + '../config/config.json')[env]; //which config to use
let db = {}; //const?

if ( config.use_env_variable) {
    let sequalize = new Sequelize(process.env[config.use_env_variable]); //if not dev, use production
} else {
    let sequalize = new Sequelize(config.database, config.username, config.password, config) //is dev, use dev info
}