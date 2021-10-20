const mongoose = require('mongoose')
const Frases = mongoose.model('Frases')

// listar
exports.listFrases = async (req, res) => {
    try {
        const data = await Frases.find({})
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({message: 'Falha ao carregar frases.'})
    }
}

// Criar
exports.createFrase = async (req, res) => {
    try {
        const frase = new Frases({
            amigo: req.body.amigo,
            frase: req.body.frase
        })

        console.log(frase)
        await frase.save()

        res.status(201).send({message: 'Frase cadastrada com sucesso.'})
    } catch (e) {
        res.status(500).send({message: 'Falha ao cadastrar a frase.'})
    }
}