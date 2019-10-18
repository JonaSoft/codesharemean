/*jshint esversion: 8 */
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let flightData = new Schema({
    cliente: {
        type:String,
        unique:true,
        required:[true,'Es necesario']
    },   
    market:{
        type:String,
        required:[true,'Es necesario']
    },
    flightini: {
        type:String,
        required:[true,'Es necesario']
    },
    
    origen:{
        type:String,
        required:[true,'Es necesario']        
    },
    destino:{
        type:String,
        required:[true,'Es necesario']
    },
    codope:{
        type:String,
        required:[true,'Es necesario']
    },
    fechainit:{
        type:String,
        required:[true,'Es necesario']
    },
    fechaend:{
        type:String,
        required:[true,'Es necesario']
    },
    frecuencia:{
        type:String,
        required:[true,'Es necesario']
    },
    clase:{
        type:String,
        required:[true,'Es necesario']
    },
    comentario:{
        type:String,
        required:[true,'Es necesario']
    },
    flightope:{
        type:String,
        required:[true,'Es necesario']
    },
    timedep:{
        type:String,
        required:[true,'Es necesario']
    },
    timearr:{
        type:String,
        required:[true,'Es necesario']
    },
    fechareg:{
        type:String,
        required:[true,'Es necesario']
    }
})

module.exports = mongoose.model('flights', flightData);