//this is just model setup
//there exist more advanced versions

module.exports = function(connection, Sequelize) {
    const Reservation = connection.define('Reservation', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 'N/A',
            validate: { len: [10] }
        },
        email: {
            type: Sequelize.STRING,
            defaultValue: 'N/A',
            validate: { isEmail: true } //does this work correctly? //I think so, but only on the db side. 
        }
    });

    return Reservation;
}