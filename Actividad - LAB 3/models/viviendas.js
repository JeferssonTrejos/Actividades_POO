const mongoose = require('mongoose');

const viviendaSchema = new mongoose.Schema({
    representante: String,
    nombre: String,
    habitantes: Number,
    direccion: {
        colonia: String,
        referencia: String,
        numero: Number
    },
    salariopromedio: Number
});

const Vivienda = mongoose.model('hogares', viviendaSchema);

module.exports = Vivienda;
