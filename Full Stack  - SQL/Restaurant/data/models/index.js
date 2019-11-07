"use strict";
//meh, watch out now :p

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename); //what's this? / is it a self reference?
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../../config.json");
var db = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0 && (file !== basename) && (file.slice(-3) === ".js"));
    })
    .forEach(function (file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {  //get the keys of the db {} right?
    if (db[modelName].associate) { //if db key has an association?
        db[modelName].associate(db); //what?
    }
});
