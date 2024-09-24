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
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    is_public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
},
    {
        underscored: true,
        timestamps: true,
        tableName: 'skills'
    }
);

module.exports = Skill;
