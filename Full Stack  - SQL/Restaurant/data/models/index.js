"use strict";
//meh, watch out now :p

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename); //what's this?
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../../config.json");
var db = {};