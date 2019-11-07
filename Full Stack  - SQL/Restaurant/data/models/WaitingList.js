module.exports = function(connection, Sequelize) {
    const WaitingList = connection.define('WaitingList', {
      name: Sequelize.STRING,
      phoneNumber: Sequelize.STRING,
      email: Sequelize.STRING
    });
  
    return WaitingList;
  }
  