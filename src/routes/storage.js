const express = require('express');
const router = express.Router();

// Controllers
const { getStorages, getStorage, createStorage } = require('./../controllers/storage');

// Validators middlewares
const { validatorGetStorage } = require('./../validators/storage');

// Middlewares
const uploadMiddleware = require('./../utils/handleStorage');

// Get all storage
router.get('/', getStorages);

// Get storage by id
router.get('/:mongoid', validatorGetStorage, getStorage);

// Create new storage
router.post('/', uploadMiddleware.single('file'), createStorage);


module.exports = router;