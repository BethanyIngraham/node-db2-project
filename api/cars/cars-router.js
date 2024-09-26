const express = require('express');
const Cars = require('./cars-model');
const {
    checkCarId,
    checkCarPayload, 
    checkVinNumberUnique, 
    checkVinNumberValid
} = require('./cars-middleware');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.getAll();
        res.json(cars);
    } catch(err) {
        next(err);
    }
});

router.get('/:id', checkCarId, (req, res, next) => {
    try {
        res.json(req.car);
    } catch(err) {
        next(err);
    }
});

router.post('/', 
    checkCarPayload, 
    checkVinNumberUnique, 
    checkVinNumberValid,  
    async (req, res, next) => {
    try {
        const {vin, make, model, mileage, title, transmission} = req.body;
        const createdCar = await Cars.create({
            vin: vin,
            make: make,
            model: model,
            mileage: mileage, 
            title: title,
            transmission: transmission
        }); 
        res.status(201).json(createdCar);
    }catch(err) {
        next(err);
    }
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message || 'Problem with the server'
    });
});

module.exports = router;
