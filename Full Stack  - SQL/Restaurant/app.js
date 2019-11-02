const Sequelize = require("sequelize");
const config = require('./config.json')

new Sequelize(config.database, config.username, config.password, config.configurations);