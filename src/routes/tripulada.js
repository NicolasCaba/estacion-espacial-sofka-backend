const express = require('express');
const router = express.Router();

// Controllers
const { getAllNavesTripuladas, createNaveTripulada } = require('./../controllers/tripulada');

// Validators middlewares
const { validatorCreateNaveTripulada } = require('./../validators/tripulada');

// GET all nave tripulada
router.get('/', getAllNavesTripuladas);

// POST create new nave tripulada
router.post('/', validatorCreateNaveTripulada, createNaveTripulada);

module.exports = router;