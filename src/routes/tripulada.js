const express = require('express');
const router = express.Router();

// Controllers
const { getAllNavesTripuladas, createNaveTripulada, getNaveTripulada, getNaveTripuladaByName } = require('./../controllers/tripulada');

// Validators middlewares
const { validatorCreateNaveTripulada, validatorGetNave, validatorGetNaveByName } = require('./../validators/tripulada');

// GET all nave tripulada
router.get('/', getAllNavesTripuladas);

// GET one nave by id
router.get('/:mongoid',validatorGetNave ,getNaveTripulada);

// GET match name
router.get('/nombre/:name',validatorGetNaveByName ,getNaveTripuladaByName);

// POST create new nave tripulada
router.post('/', validatorCreateNaveTripulada, createNaveTripulada);

module.exports = router;