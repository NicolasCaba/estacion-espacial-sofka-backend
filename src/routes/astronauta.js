const express = require('express');
const router = express.Router();

// Controllers
const { createAstronauta, getAstronauta } = require('./../controllers/astronauta');

// Validators middlewares
const { validatorCreateAstronauta, validatorGetAstronauta } = require('./../validators/astronauta');

// POST create new astronauta
router.post('/', validatorCreateAstronauta, createAstronauta);

// Get astronauta by id
router.get('/:mongoid',validatorGetAstronauta ,getAstronauta );

module.exports = router;