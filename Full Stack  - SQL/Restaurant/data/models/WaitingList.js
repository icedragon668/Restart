module.exports = function(connection, Sequelize) {
    const WaitingList = connection.define('WaitingList', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A'
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: 'N/A',
        validate: { isEmail: true } //really though, I seem to recall an issue here...
      }
    });
  
      return WaitingList;
  }
  