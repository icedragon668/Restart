module.exports = function(connection, Sequelize) {
    const Staff = connection.define("Staff", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: Sequelize.INTEGAR,
        hireDate: {
            type: Sequelize.DATE,
            default: '1970-01-01'
        }
    });

    return Staff;
}