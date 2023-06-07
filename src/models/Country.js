const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Continent = require('./Continent');

const Country = sequelize.define('country', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lenguaje: {
        type: DataTypes.STRING,
        allowNull: false
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false
    },
    flagUrl: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

Country.belongsTo(Continent)
Continent.hasMany(Country)

module.exports = Country;