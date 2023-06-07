const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');


const Continent = sequelize.define('continent', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //countryId
});

module.exports = Continent;