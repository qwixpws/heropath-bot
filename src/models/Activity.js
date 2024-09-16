const { DataTypes } = require('sequelize');
const sequelize     = require('../configs/database.js');

const Activity = sequelize.define('Activity', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timeSpent: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    multiplier: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    skillId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.TIME,
        allowNull: true,
    }
});

module.exports = Activity;
