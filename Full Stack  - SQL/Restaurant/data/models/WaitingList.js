module.exports = function(connection, Sequelize) {
    const WaitingList = connection.define('WaitingList', {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isAlpha: true }
      },
      phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'N/A',
        validate: { len: [10] } //does this need to be 10, 10?
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: 'N/A',
        validate: { isEmail: true } //really though, I seem to recall an issue here...
      }
    });
  
      return WaitingList;
  }
  