const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('mortgage ', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

sequelize.authenticate()
    .then(() => console.log('Connected to MySQL database.'))
    .catch((error) => console.error('Unable to connect to the database:', error));

module.exports = sequelize;
