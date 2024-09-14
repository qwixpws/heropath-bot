const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('[STATUS]: Datbase connected'))
    .catch(err => console.log('[ERR]: ' + err));

module.exports = sequelize;
