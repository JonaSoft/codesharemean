/*jshint esversion: 8 */
const express = require('express');
const modeloFlight = require('../models/flights')

const app = express();


//obtener todos los flights
app.get('/flights', async(req, res) => {
    const flights = await modeloFlight.find();
    res.json({
        flights
    })
});
//crear un flight
app.post('/flights',(req, res) =>{

    let body = req.body;

    let flight = new modeloFlight({
        cliente:	body.cliente,
        market:	    body.market,
        flightini:	body.flightini,
        origen:	    body.origen,
        destino:	body.destino,
        codope:	    body.codope,
        fechainit:	body.fechainit,
        fechaend:	body.fechaend,
        frecuencia:	body.frecuencia,
        clase:	    body.clase,
        comentario:	body.comentario,
        flightope:	body.flightope,
        timedep:	body.timedep,
        timearr:	body.timearr,
        fechareg:	body.fechareg

    });

    flight.save((err,flightDB)=>{

        if (err){
            return res.status(400).json({
                ok:false,
                err
            });
        }
        res.json({
            ok:true,
            flight:flightDB
        })
    })
});

//buscar un flight
app.get('/flights/:id', async(req, res) => {
    const idflights = await modeloFlight.findById(req.params.id);
    res.json({
        idflights
    })
});

//actualizar un flight
app.put('/flights/:id', async(req, res) => {
    let body = req.body;
    const { id } = req.params;
    const flightporActualizar = {
        cliente:	body.cliente,
        market:	    body.market,
        flightini:	body.flightini,
        origen:	    body.origen,
        destino:	body.destino,
        codope:	    body.codope,
        fechainit:	body.fechainit,
        fechaend:	body.fechaend,
        frecuencia:	body.frecuencia,
        clase:	    body.clase,
        comentario:	body.comentario,
        flightope:	body.flightope,
        timedep:	body.timedep,
        timearr:	body.timearr,
        fechareg:	body.fechareg
    }
    await modeloFlight.findByIdAndUpdate(id, { $set: flightporActualizar }, { new: true });
    res.json({
        status: 'Flight Actualizado'
    });
});

//eliminar un flight
app.delete('/flights/:id', async(req, res) => {
    await modeloFlight.findByIdAndDelete(req.params.id);
    res.json({
        status: 'Flight eliminado'
    });
});
module.exports=app;