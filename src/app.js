const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

/**
 * App
 */
const app = express()

// conexão com o banco de dados
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const db = mongoose.connection

db.on('connected', () => {
    console.log('Mongoose Conexão padrão está aberta')
})

db.on('error', err => {
    console.log(`Mongoose default connection has occured \n${err}`)
})

db.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected')
})

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
            'A conexão padrão do Mongoose foi desconectada devido ao encerramento do aplicativo '
        )
        process.exit(0)
    })
})

// Load Models
const Frases = require('./models/frases')

/**
 * Careegando as rotas
 */
const indexRoutes = require('./routes/index-routes')
app.use('/', indexRoutes)

const frasesRoutes = require('./routes/frases-routes')
app.use('/frases', frasesRoutes)

module.exports = app