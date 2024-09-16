const { DataTypes } = require('sequelize');
const sequelize     = require('../configs/database.js');

const User  = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telegramId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    discordId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    updatedAt: {
        type: DataTypes.TIME,
        allowNull: true,
    }
});

module.exports = User;
