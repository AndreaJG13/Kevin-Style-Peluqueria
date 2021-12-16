const mongoose = require('mongoose');
const { Schema } = mongoose; //Definir la estructura de los datos

const servicioSchemma = new Schema({
    cliente: {type: String, required: true},
    profesional: {type: String, required: true},
    actividad: {type: String, required: true}
});

module.exports = mongoose.model('Servicio', servicioSchemma);