const Cars = require('./cars-model');

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
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}