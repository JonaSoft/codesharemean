const express = require('express');
const modeloFlight = require('../models/flights')

const app = express();



app.get('/flights', async(req, res) => {
    const flights = await modeloFlight.find();
    res.json({
        flights
    })
});

app.post('/flight', function(req, res) {

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

app.put('/flight/:id', function(req, res) {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/flight', function(req, res) {
    res.json('delete Usuario');
});

module.exports=app;