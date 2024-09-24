const { DataTypes } = require('sequelize');
const sequelize = require('../configs/database.js');

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
    time_spent: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    multiplier: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    skill_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
    {
        underscored: true,
        timestamps: true,
        tableName: 'activities'
    }
);

module.exports = Activity;
