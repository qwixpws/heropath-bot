const { sequelize }     = require('../configs/database.js');
const { DataTypes }     = require('sequelize');
console.log(Object.keys(sequelize));
console.log(Object.keys(sequelize.models));
const Skill = sequelize.define('Skill', {
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

//Skill.init({
    //name: {
        //type: DataTypes.STRING,
        //allowNull: false,
    //},
    //is_public: {
        //type: DataTypes.BOOLEAN,
        //defaultValue: false,
    //},
    //description: {
        //type: DataTypes.STRING,
        //allowNull: false,
    //},
    //created_by: {
        //type: DataTypes.INTEGER,
        //allowNull: false,
    //},
//},
    //{
        //underscored: true,
        //timestamps: true,
        //tableName: 'skills'
    //}
//);

module.exports = (sequelize, DataTypes) => Skill;
