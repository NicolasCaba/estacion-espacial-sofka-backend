const express = require('express');
const router = express.Router();

// Controllers
const { getAllNavesLanzaderas, createNaveLanzadera } = require('../controllers/lanzadera');

// Validators middlewares
const { validatorCreateNaveLanzadera } = require('./../validators/lanzadera');


// GET all navesLanzadera
router.get('/', getAllNavesLanzaderas);

// POST create naveLanzadera
router.post('/', validatorCreateNaveLanzadera, createNaveLanzadera);

module.exports = router;