const mongoose = require('mongoose');
const { Schema } = mongoose;

const flightData = new Schema({
    market:{type:String},
    flightini:{type:String}
    /*flightend:{type:String},
    origen:{type:String},
    destino:{type:String},
    numope:{type:String},
    codope:{type:String},
    fechainit:{type:String},
    fechaend:{type:String},
    frecuencia:{type:String},
    clase:{type:String},
    comentario:{type:String},
    flightope:{type:String},
    timedep:{type:String},
    timearr:{type:String},
    fechareg:{type:String},
    key$:{type:String}*/
})

module.exports = mongoose.model('flights',flightData);