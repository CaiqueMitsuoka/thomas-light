const io = require('socket.io')
const crypto = require('crypto')

const Server = {
  start: (server, lights) => {
    Server.lights = lights
    Server.server = io(server)
    Server.setupClient(server)

    return Server.server
  },
  setupClient: () => {
    Server.server.on('connection',  (client) => {
      console.log('[EUREKA-SERVER][WS][CONNECTION]')

      client.on('register', (data) => {
        client.lightId = crypto.createHash('md5').update(data).digest("hex")
        console.log(`[EUREKA-SERVER][WS][REGISTER] Data: ${data}, Id: ${client.lightId}`)

        Server.lights[client.lightId] = {}

        client.join(client.lightId, () => {
          Server.lights[client.lightId].client = client
          console.log(`[EUREKA-SERVER][WS][REGISTERED][ROOM] Id: ${client.lightId}`)
        })
        client.emit('registered', client.lightId)
      })
      client.on('disconnect', () => {
        console.log('[EUREKA-SERVER][WS][DISCONNECT]')
        delete Server.lights[client.lightId]
      })
    })
  }
}

module.exports = Server
