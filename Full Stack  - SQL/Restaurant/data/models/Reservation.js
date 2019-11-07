//this is just a simple SQL model setup
//there exist more advanced versions

module.exports = function(connection, Sequelize) {
    const Reservation = connection.define('Reservation', {
        name: Sequelize.STRING,
        phoneNumber: Sequelize.STRING,
        email: Sequelize.STRING
    });

    return Reservation;
}