const express = require('express');
const router = express.Router();

// Controllers
const { getAllNavesNoTripuladas, createNaveNoTripulada, getNaveNoTripulada, getNaveNoTripuladaByName } = require('./../controllers/no-tripulada');

// Validators middlewares
const { validatorCreateNaveNoTripulada, validatorGetNave, validatorGetNaveByName } = require('./../validators/no-tripulada');

// GET all nave no tripulada
router.get('/', getAllNavesNoTripuladas);

// GET one nave by id
router.get('/:mongoid', validatorGetNave,  getNaveNoTripulada);

// GET match name
router.get('/nombre/:name',validatorGetNaveByName ,getNaveNoTripuladaByName);


// POST create new nave no tripulada
router.post('/', validatorCreateNaveNoTripulada, createNaveNoTripulada);

module.exports = router;