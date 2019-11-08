const db = require('./data/models')

//findall(where: )
db.sequelize.sync().then(function() {

    db.Reservation.findAll({
        where: {
            email: 'foo@test.com'
        }
    }).then(function(data) {
        console.log(JSON.stringify(data, null, 2)); //why this format?
    })

})