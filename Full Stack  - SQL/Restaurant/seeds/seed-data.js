const db = require('./../data/models');

db.sequelize.sync().then(()=>{
    db.Reservation.bulkCreate([{
