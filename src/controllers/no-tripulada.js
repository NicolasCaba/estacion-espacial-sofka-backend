const { matchedData } = require('express-validator');
const noTripuladasModel = require('./../models/no-tripulada');

const getAllNavesNoTripuladas = async (req, res) => {
  try {
    let noTripuladas = await noTripuladasModel.find();

    res.status(200).send(noTripuladas);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get naves no tripuladas'})
  }
}

const createNaveNoTripulada = async (req, res) => {
  try {
    const nave = matchedData(req);
    
    const response = await noTripuladasModel.create(nave);

    res.status(200).send({ response, message: 'Nave no tripulada created' });
  } catch (error) {
    res.status(403).send({error, message: 'Cannot create nave no tripulada'})
  }
}

module.exports = { getAllNavesNoTripuladas, createNaveNoTripulada };