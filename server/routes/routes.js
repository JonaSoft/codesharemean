const express = require ('express');
const router = express.Router();
const flights = require ('../controllers/flights.controller');
//traer todos los flights
router.get('/', flights.getFlights);

//crear flight
router.post('/flight',flights.createFlight);

//traer un flight
router.get('/:id',flights.getFlight);

//actualizar un flight
router.put('/:id',flights.updateFlight);

//actualizar un delete
router.delete('/:id',flights.deleteFlight);


module.exports = router;