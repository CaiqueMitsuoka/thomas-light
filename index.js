const socket = require('socket.io-client')(process.env.SERVER_URL);
const LightLighter = require('./light-lighter/index')
const VigilantGuitar = require('./vigilant-guitar')
const state = {
  mainLight: false
}

const toggleMainLight = () => {
  if(state.mainLight) {
    LightLighter.off()
  } else {
    LightLighter.on()
  }

  state.mainLight = !state.mainLight
}

VigilantGuitar.init()

socket.on('connect', () => {
  socket.emit('register', process.env.ID)
  console.log('[THOMAS-LIGHT-CLIENT][WS][CONNECTED]')
})
.on('disconnect', (data) => {
  console.log('[THOMAS-LIGHT-CLIENT][WS][DISCONECTED]')
})
.on('registered', (data) => {
  console.log('[THOMAS-LIGHT-CLIENT][WS][REGISTERED]');
})
.on('status.update', () => {
  toggleMainLight()
  console.log(`[THOMAS-LIGHT-CLIENT][WS][STATUS][UPDATE] State: ${state.mainLight}`)
})

VigilantGuitar.start((color) => {
  socket.emit('guitar.press', color)
})
