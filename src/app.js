const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

/**
 * App
 */
const app = express()

// conexão com o banco de dados
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
    useNewUrlParser: true
})
const db = mongoose.connection

db.on('connected', () => {
    console.log('Mongoose Conexão padrão está aberta')
})

db.on('eoor', err => {
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

/**
 * Careegando as rotas
 */
const indexRoutes = require('./routes/index-routes')
app.use('/', indexRoutes)

module.exports = app