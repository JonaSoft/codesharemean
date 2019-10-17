/*jshint esversion: 8 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let flightData = new Schema({
    cliente: {
        type:String,
        required:true
    },   
    market:{
        type:String,
        required:true
    },
    flightini: {
        type:String,
        required:true
    },
    
    origen:{
        type:String,
        required:true        
    },
    destino:{
        type:String,
        required:true
    },
    codope:{
        type:String,
        required:true
    },
    fechainit:{
        type:String,
        required:true
    },
    fechaend:{
        type:String,
        required:true
    },
    frecuencia:{
        type:String,
        required:true
    },
    clase:{
        type:String,
        required:true
    },
    comentario:{
        type:String,
        required:true
    },
    flightope:{
        type:String,
        required:true
    },
    timedep:{
        type:String,
        required:true
    },
    timearr:{
        type:String,
        required:true
    },
    fechareg:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('flights', flightData);