const gp = require('gamepad')
const ACTIONS = {
  0:'yellow',
  1:'green',
  2:'red',
  3:'blue',
  4:'orange',
}

module.exports = VigilantGuitar = {
  init: () => {
    gp.init()

    VigilantGuitar.CONTROLLERS = []

    for (var i = 0, l = gp.numDevices(); i < l; i++) {
      VigilantGuitar.CONTROLLERS.push(gp.deviceAtIndex(i))
    }

    VigilantGuitar.controller = VigilantGuitar.CONTROLLERS.find((item) => {
      return item.description.includes('Guitar')
    })
  },
  start: (callback) => {
    VigilantGuitar.buttonSetup(callback)

    setInterval(gp.processEvents, 50)
  },
  buttonSetup: (callback) => {
    gp.on('down', (id, num) => {
      if(id === VigilantGuitar.controller.deviceID){
        callback(ACTIONS[num])
      }
    })
  }
}
