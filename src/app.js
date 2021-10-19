const express = require('express')

/**
 * App
 */
const app = express()

/**
 * Careegando as rotas
 */
const indexRoutes = require('./routes/index-routes')
app.use('/', indexRoutes)

module.exports = app