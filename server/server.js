require('./config/config');

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(require('../server/routes/routesclient'))

// parse application/json
app.use(bodyParser.json())


// conexion a mongoDB
mongoose.connect('mongodb://localhost:27017/flights',(err,res)=>{
    if (err) throw err;

    console.log('Conectado a base de datos');
});
    

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});