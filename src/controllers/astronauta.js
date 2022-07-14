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

module.exports = { createAstronauta };