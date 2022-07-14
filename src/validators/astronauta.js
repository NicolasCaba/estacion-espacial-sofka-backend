const { check, validationResult } = require('express-validator');

const validatorCreateAstronauta = [
  check('nombre')
    .exists()
    .notEmpty()
    .isString(),
  check('edad')
    .exists()
    .notEmpty()
    .isInt(),
  check('cargo')
    .exists()
    .notEmpty()
    .isString(),
  check('estado')
    .exists()
    .notEmpty()
    .isString(),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error) {
      res.status(400);
      res.send({ errors: error.array(), message: 'validation new astronauta' });
    }
  }
]

module.exports = { validatorCreateAstronauta };