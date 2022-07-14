const express = require('express');
const router = express.Router();

// Controllers
const { getAllNavesNoTripuladas, createNaveNoTripulada } = require('./../controllers/no-tripulada');

// Validators middlewares
const { validatorCreateNaveNoTripulada } = require('./../validators/no-tripulada');

// GET all nave no tripulada
router.get('/', getAllNavesNoTripuladas);

// POST create new nave no tripulada
router.post('/', validatorCreateNaveNoTripulada, createNaveNoTripulada);

module.exports = router;