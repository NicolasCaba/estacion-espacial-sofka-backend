const express = require('express');
const router = express.Router();

// Controllers
const { getAllNavesLanzaderas, createNaveLanzadera, getNaveLanzaderaByName } = require('../controllers/lanzadera');

// Validators middlewares
const { validatorCreateNaveLanzadera, validatorGetNaveByName } = require('./../validators/lanzadera');


// GET all navesLanzadera
router.get('/', getAllNavesLanzaderas);

// GET match name
router.get('/nombre/:name',validatorGetNaveByName ,getNaveLanzaderaByName);

// POST create naveLanzadera
router.post('/', validatorCreateNaveLanzadera, createNaveLanzadera);

module.exports = router;