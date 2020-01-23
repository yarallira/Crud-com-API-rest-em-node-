const mongoose = require('../database');

const ClienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    rg: {
        type: String,
        required: true,
    },
    cpf: {
        type: String,
        required: true,
    },
    idade: {
        type: Number,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },

})

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;