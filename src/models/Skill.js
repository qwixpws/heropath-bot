const { DataTypes } = require('sequelize');
const sequelize     = require('../configs/database.js');

const Skill  = sequelize.define('Skill', {
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
    createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isPublic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.TIME,
        allowNull: false,
    }
});

module.exports = Skill;
