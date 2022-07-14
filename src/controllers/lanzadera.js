const { matchedData } = require('express-validator');
const lanzaderasModel = require('../models/lanzadera');

/**
 * Get all naves lanzaderas
 * @param {Express request} req 
 * @param {Express require} res 
 */
const getAllNavesLanzaderas = async (req, res) => {
  try {
    let lanzaderas = await lanzaderasModel.findAllData({});

    res.status(200).send(lanzaderas);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get lanzaderas'})
  }
}

/**
 * GET nave by name
 * @param {Express require} req 
 * @param {Express response} res 
 */
 const getNaveLanzaderaByName = async (req, res) => {
  try {
    req = matchedData(req);
    const { name } = req;
    const nameRegEx = new RegExp(name);
    const naves = await lanzaderasModel.findAllDataByName(nameRegEx);
    res.status(200).send(naves);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get naves by name'})
  }
}

/**
 * Create new nave lanzadera
 * @param {Express request} req 
 * @param {Express require} res 
 */
const createNaveLanzadera = async (req, res) => {
  try {
    const nave = matchedData(req);
    
    const response = await lanzaderasModel.create(nave);

    res.status(200).send({ response, message: 'Lanzadera created' });
  } catch (error) {
    res.status(403).send({error, message: 'Cannot create lanzadera'})
  }
}

module.exports = { getAllNavesLanzaderas, createNaveLanzadera, getNaveLanzaderaByName };