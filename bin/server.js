/**
 * Chaando dependências necessárias para subir nosso servidor HTTP 
 * e realizar o debug.
 */
const app = require('../src/app')
const http = require('http')
//const { exit } = require('process')
const debug = require('debug')('nodestr:server')

// PORT // based on express-generator
/**
 * Função para normalizar a porta en que rodará nossa aplição
 */
function normalizePort(val) {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
        return val
    }
    if (port >= 0) {
        return port
    }
    return false
}

const port = normalizePort(process.env.PORT || 3000)
app.set('port', port)

// error handler
/**
 * Função para tratar possiveis erros
 */
function onError(error) {
    if (error.syscal !== 'listen') {
        throw error
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' Requer previlégios avançados')
            process.exit(1)
        case 'EADDRINUSE':
            console.error(bind + 'Já está em uso')
            process.exit(1)
        default:
            throw error
    }
}

// Listenner handler
/**
 * Função para escutar o servidor e colocarmos o node de pé
 */
function onListening() {
    const addr = server.address()
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
    debug('Listening on ' + bind)
}

// Server
const server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
console.log(`API está rodando na porta: ${port}!`)