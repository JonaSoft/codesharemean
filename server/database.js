const mongoose = require('mongoose');

const URI = 'mongodb://localhost/codeshare';

mongoose.connect(URI)
.then(db =>console.log('Conectado a base de datos'))
.catch(err => console.log(err))

module.exports = mongoose;