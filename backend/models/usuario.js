const mongoose = require('mongoose');
const { Schema } = mongoose; //Definir la estructura de los datos

const usuarioSchemma = new Schema({
    nombre: {type: String, required: true},
    correo: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('Usuario', usuarioSchemma);