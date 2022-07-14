const { matchedData } = require('express-validator');
const TripuladasModel = require('./../models/tripulada');

/**
 * Get all naves tripuladas
 * @param {Express request} req 
 * @param {Express require} res 
 */
const getAllNavesTripuladas = async (req, res) => {
  try {
    let tripuladas = await TripuladasModel.find();

    res.status(200).send(tripuladas);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get naves tripuladas'})
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

module.exports = { getAllNavesTripuladas, createNaveTripulada };