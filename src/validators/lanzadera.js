const { check, validationResult } = require('express-validator');

const validatorCreateNaveLanzadera = [
  check('nombre')
    .exists()
    .notEmpty()
    .isString(),
  check('categoria')
    .exists()
    .notEmpty()
    .isString(),
  check('tipoDeCombustible')
    .exists()
    .notEmpty()
    .isString(),
  check('nivelDeCombustible')
    .exists()
    .notEmpty()
    .isInt(),
  check('mision')
    .exists()
    .notEmpty()
    .isString(), 
  check('pesoEnKg')
    .exists()
    .notEmpty()
    .isDecimal(), 
  check('estado')
    .exists()
    .notEmpty()
    .isString(), 
  check('image_id')
    .exists()
    .notEmpty()
    .isMongoId(),  
  check('cargaId')
    .exists()
    .notEmpty()
    .isMongoId(), 
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error) {
      res.status(400);
      res.send({ errors: error.array(), message: 'validation new lanzadera' });
    }
  }
]

module.exports = { validatorCreateNaveLanzadera };