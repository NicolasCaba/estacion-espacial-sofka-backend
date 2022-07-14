const express = require('express');
const router = express.Router();

// Controllers
const { createAstronauta } = require('./../controllers/astronauta');

// Validators middlewares
const { validatorCreateAstronauta } = require('./../validators/astronauta');

// POST create new astronauta
router.post('/', validatorCreateAstronauta, createAstronauta);

module.exports = router;