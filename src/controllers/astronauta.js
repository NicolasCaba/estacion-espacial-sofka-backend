const { matchedData } = require('express-validator');
const astronautasModel = require('./../models/astronauta');

/**
 * Create new astronauta
 * @param {Express request} req 
 * @param {Express response} res 
 */
const createAstronauta = async (req, res) => {
  try {
    const astronauta = matchedData(req);
    
    const response = await astronautasModel.create(astronauta);

    res.status(200).send({ response, message: 'Astronaut created' });
  } catch (error) {
    res.status(403).send({error, message: 'Cannot create astronaut'})
  }
}

const getAstronauta = async (req, res) => {
  try {
    req = matchedData(req);
    const { mongoid } = req;
    const storage = await astronautasModel.findById(mongoid, {"__v": 0, "createdAt": 0, "updatedAt": 0});
    res.status(200).send(storage);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get storage by id'})
  }
}

module.exports = { createAstronauta, getAstronauta };