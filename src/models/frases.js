const mongoose = require('mongoose') // Chama o modulo mongoose
const Schema = mongoose.Schema 

const schema = new Schema ({
    amigo: {
        type: String,
        required: true,
        trim: true
    },
    frase: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Frases', schema)