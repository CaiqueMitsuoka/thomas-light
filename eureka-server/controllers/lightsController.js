const lights = {}
const socket = require('../socket/server')

const lightsController = (server) => {
  return controller = {
    socket: socket.start(server, lights),
    show: (request, response) => {
      response.render('lights/show', {
        lights: Object.keys(lights)
      })
    },
    edit: (request, response, next) => {
      lights[request.params.id].client.emit('status.update')
      console.log(`[LIGHTLIGHTERSERVER][POST][MAIN-LIGHT][TOGGLED]`)

      response.redirect('/')
      next()
    }
  }
}

module.exports = lightsController
