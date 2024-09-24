const express = require('express');
const Cars = require('./cars-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
 try {
    const cars = await Cars.getAll();
    res.json(cars);
  } catch(err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
    res.json(`getting car with id ${req.params.id}`)
});

router.post('/', async (req, res, next) => {
   res.json('creating new car')
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message || 'Problem with the server'
    });
});

module.exports = router;
