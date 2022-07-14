const { matchedData } = require('express-validator');
const storageModel = require('./../models/storage');

/**
 * GET all storage
 * @param {Express require} req 
 * @param {Express response} res 
 */
const getStorages = async (req, res) => {
  try {
    const storages = await storageModel.find({});
    res.status(200).send(storages);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get storage'})
  }
}

/**
 * GET storage by id
 * @param {Express require} req 
 * @param {Express response} res 
 */
const getStorage = async (req, res) => {
  try {
    req = matchedData(req);
    const { mongoid } = req;
    const storage = await storageModel.findById(mongoid, {"__v": 0, "createdAt": 0, "updatedAt": 0});
    res.status(200).send(storage);
  } catch (error) {
    res.status(403).send({error, message: 'Cannot get storage by id'})
  }
}

/**
 * POST create storage
 * @param {Express require} req 
 * @param {Express response} res 
 */
const createStorage = async (req, res) => {
  try {
    const { file } = req;
    const PUBLIC_URL = process.env.PUBLIC_URL;
    const fileData = {
      url: `${PUBLIC_URL}/images/${file.filename}`,
      filename: file.filename
    }

    const response = await storageModel.create(fileData);
    res.status(200).send({ response, message: 'Storage created' });
  } catch (error) {
    res.status(403).send({error, message: 'Cannot create storage'})
  }
}

module.exports = { getStorages, getStorage, createStorage };