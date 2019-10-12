const flightsController ={};
const flightModelo = require('../models/flights');

flightsController.getFlights = async(req, res)=>{
    /*res.json({
        usuario:'admin'
    });*/
    const flights = await flightModelo.find();
    res.json({
        flights
    })
};

flightsController.createFlight = async(req,res)=>{
    //console.log(req.body);
    const newFlight = new flightModelo(req.body);
    console.log(newFlight);
    await newFlight.save();
    res.json();
};

flightsController.getFlight = async(req,res)=>{
    console.log(req.params.id);
    const idFlight = await flightModelo.findById(req.params.id);
    res.json(idFlight);

};

flightsController.updateFlight = ()=>{


};
flightsController.deleteFlight = ()=>{


};


module.exports = flightsController