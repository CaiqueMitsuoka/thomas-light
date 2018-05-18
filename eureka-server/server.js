const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
var server = require('http').createServer(app)
var io = require('socket.io')(server);

io.on('connection', (client) => {
  console.log('[EUREKA-SERVER][WS][CONNECTION]')

  client.on('status.update', (data) => { console.log(`[EUREKA-SERVER][WS][STATUS][UPDATE-EVENT][DATA-${data}] `) })
  client.on('disconnect', function(){ console.log('[EUREKA-SERVER][WS][DISCONNECT]') })
})
// const router = require('./routes/router')

// app.use('/', router)

server.listen(PORT, () => {
  console.log(`[EUREKA-SERVER] Listening on: ${PORT}`)
})
