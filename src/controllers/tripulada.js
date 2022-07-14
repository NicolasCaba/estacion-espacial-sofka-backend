const { matchedData } = require('express-validator');
const TripuladasModel = require('./../models/tripulada');

/**
 * Get all naves tripuladas
 * @param {Express request} req 
 * @param {Express require} res 
 */
const getAllNavesTripuladas = async (req, res) => {
  try {
    let tripuladas = await TripuladasModel.findAllData({});

    res.status(200).send(tripuladas);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get naves tripuladas'})
  }
}

/**
 * GET nave by id
 * @param {Express require} req 
 * @param {Express response} res 
 */
 const getNaveTripulada = async (req, res) => {
  try {
    req = matchedData(req);
    const { mongoid } = req;
    const nave = await TripuladasModel.findOneDataById(mongoid);
    res.status(200).send(nave);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get nave by id'})
  }
}

/**
 * GET nave by name
 * @param {Express require} req 
 * @param {Express response} res 
 */
 const getNaveTripuladaByName = async (req, res) => {
  try {
    req = matchedData(req);
    const { name } = req;
    const nameRegEx = new RegExp(name);
    const naves = await TripuladasModel.findAllDataByName(nameRegEx);
    res.status(200).send(naves);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get naves by name'})
  }
}

/**
 * Create new nave tripulada
 * @param {Express request} req 
 * @param {Express require} res 
 */
const createNaveTripulada = async (req, res) => {
  try {
    const nave = matchedData(req);
    
    const response = await TripuladasModel.create(nave);

    res.status(200).send({ response, message: 'Tripulada created' });
  } catch (error) {
    res.status(403).send({error, message: 'Cannot create nave tripulada'})
  }
}

module.exports = { getAllNavesTripuladas, createNaveTripulada, getNaveTripulada ,getNaveTripuladaByName };