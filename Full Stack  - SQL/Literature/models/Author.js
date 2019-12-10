module.exports = (connection, Sequelize) {
    const Author = connection.define("Author", {
        name: Sequelize.STRING,
        email: Sequelize.STRING
    });
    return Author;
}