const lanzaderasModel = require('../models/lanzadera');

/**
 * Get all naves lanzaderas
 * @param {Express request} req 
 * @param {Express require} res 
 */
const getAllNavesLanzaderas = async (req, res) => {
  try {
    let lanzaderas = await lanzaderasModel.find();

    res.status(200).send(lanzaderas);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get lanzaderas'})
  }
}

/**
 * Create new nave lanzadera
 * @param {Express request} req 
 * @param {Express require} res 
 */
const createNaveLanzadera = async (req, res) => {
  try {
    const nave = req.body;
    
    const response = await lanzaderasModel.create(nave);

    res.status(200).send({ response, message: 'Lanzadera created' });
  } catch (error) {
    res.status(403).send({error, message: 'Cannot create lanzadera'})
  }
}

module.exports = { getAllNavesLanzaderas, createNaveLanzadera };