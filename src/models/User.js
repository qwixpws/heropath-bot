const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database.js');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telegram_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    discord_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
    {
        underscored: true,
        timestamps: true,
        tableName: 'users'
    }
);

module.exports = User;
