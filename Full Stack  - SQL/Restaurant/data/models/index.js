"use strict";
//meh, watch out now :p

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename); //what's this?
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../../config.json");
var db = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
