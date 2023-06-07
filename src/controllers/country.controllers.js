const catchError = require('../utils/catchError');
const Country = require('../models/Country');
const City = require('../models/City');

const getAll = catchError(async(req, res) => {
    const country = await Country.findAll({include:[City]})
    return res.json(country)
});

const create = catchError(async(req, res) => {
    const country = req.body 
    const createCountry = await Country.create(country)
    return res.status(201).json(createCountry)
});

const getOne = catchError(async(req, res) => {
    const {id} = req.params
    const countryOne = await Country.findByPk(id)
    if(!countryOne) return res.sendStatus(404)
    return res.json(countryOne)
});

const remove = catchError(async(req, res) => {
    const {id} = req.params
    const removeCountry = await Country.destroy({where:{id}})
    if(!removeCountry) return res.sendStatus(404)
    return res.status(204)
});

const update = catchError(async(req, res) => {
    const {id} = req.params
    const country = req.body
    const countryUpdate = await Country.update(country, {where:{id}, returning:true })
    if(!countryUpdate [0] === 0) return res.sendStatus(404)
    return res.json(countryUpdate[1][0])
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}