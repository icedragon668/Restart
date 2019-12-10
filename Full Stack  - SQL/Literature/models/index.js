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

fs
    .readdirSync(__dirname) //read dir
    .filter((file)=>{ //and filter for...
        return (file.indexOf(".") !== 0 && (file !== basename) && (file.slice(-3) === ".js"); //files NOT at index 0 AND file is NOT basename AND file ends in ".js"
    }) //ie: finds all ".js" files except his one (index 0)
    .forEach((file)=>{
        let model = sequalize["import"](path.join(__dirname, file));
        db[model.name] = model;
    }) //for each file, grab the model and db(???)