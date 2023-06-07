const Continent = require("./Continent");
const Country = require("./Country");

Continent.belongsTo(Country)//countryId
Country.hasMany(Continent)