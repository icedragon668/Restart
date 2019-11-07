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
        defaultValue: 'N/A'
      }
    });
  
      return WaitingList;
  }
  