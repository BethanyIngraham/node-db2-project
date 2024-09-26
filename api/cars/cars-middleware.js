const Cars = require('./cars-model');
const vinValidator = require('vin-validator');

const checkCarId = async (req, res, next) => {
  try {
    const {id} = req.params;
    const car = await Cars.getById(id);
    if(!car) {
      next({
        status: 404,
        message: `car with id ${id} is not found`
      });
    } else {
      req.car = car;
      next();
    }
  } catch(err) {
    next(err);
  }
}

const checkCarPayload = (req, res, next) => {
  const {vin, make, model, mileage} = req.body;
  if(!vin) {
    return next({
      status: 400,
      message: 'vin is missing'
    });
  }
  if(!make) {
    return next({
      status: 400,
      message: 'make is missing'
    });
  }
  if(!model) {
    return next({
      status: 400,
      message: 'model is missing'
    });
  }
  if(!mileage) {
    return next({
      status: 400,
      message: 'mileage is missing'
    });
  }
  next();
}

const checkVinNumberValid = (req, res, next) => {
  const {vin} = req.body;
  const isValidVin = vinValidator.validate(vin);
  if(!isValidVin) {
    next({
      status: 400,
      message: `vin ${vin} is invalid`
    });
  } else {
    next();
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const {vin} = req.body;
    const existingVin = await Cars.getByVin(vin);
    if(existingVin) {
      next({
        status: 400,
        message: `vin ${vin} already exists`
      });
    } else {
      next();
    }
  } catch(err) {
    next(err);
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}