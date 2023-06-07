const City = require("./City");
const Continent = require("./Continent");
const Country = require("./Country");
const User = require("./User");

Continent.belongsTo(Country)//countryId
Country.hasMany(Continent)

Country.belongsTo(Continent)
Continent.hasMany(Country)

City.belongsTo(Country)
Country.hasMany(City)

User.belongsTo(Country)
Country.hasMany(User)
