const { matchedData } = require('express-validator');
const noTripuladasModel = require('./../models/no-tripulada');

/**
 * Get all naves no tripuladas
 * @param {Express request} req 
 * @param {Express response} res 
 */
const getAllNavesNoTripuladas = async (req, res) => {
  try {
    let noTripuladas = await noTripuladasModel.findAllData({});

    res.status(200).send(noTripuladas);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get naves no tripuladas'})
  }
}

/**
 * GET nave by id
 * @param {Express require} req 
 * @param {Express response} res 
 */
 const getNaveNoTripulada = async (req, res) => {
  try {
    req = matchedData(req);
    const { mongoid } = req;
    const nave = await noTripuladasModel.findOneDataById(mongoid);
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
 const getNaveNoTripuladaByName = async (req, res) => {
  try {
    req = matchedData(req);
    const { name } = req;
    const nameRegEx = new RegExp(name);
    const naves = await noTripuladasModel.findAllDataByName(nameRegEx);
    res.status(200).send(naves);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get naves by name'})
  }
}

/**
 * Create new nave no tripulada
 * @param {Express request} req 
 * @param {Express response} res 
 */
const createNaveNoTripulada = async (req, res) => {
  try {
    const nave = matchedData(req);
    
    const response = await noTripuladasModel.create(nave);

    res.status(200).send({ response, message: 'Nave no tripulada created' });
  } catch (error) {
    res.status(403).send({error, message: 'Cannot create nave no tripulada'})
  }
}

module.exports = { getAllNavesNoTripuladas, createNaveNoTripulada, getNaveNoTripulada, getNaveNoTripuladaByName };