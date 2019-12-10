module.exports = function(connection, Sequelize) {
    const Article = connection.define('Article', {
      title: Sequelize.STRING,
      body: Sequelize.TEXT
    });
  
    return Article;
  };
  