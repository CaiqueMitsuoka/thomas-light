const socket = require('socket.io-client')("http://localhost:8080");
const state = {
  mainLight: false
}

const toggleMainLight = () => {
  state.mainLight = !state.mainLight
}

socket.on('connect', () => {
  socket.emit('register', process.env.ID)
  console.log('[EUREKA-CLIENT][WS][CONNECTED]')
})
.on('disconnect', (data) => {
  console.log('[EUREKA-CLIENT][WS][DISCONECTED]')
})
.on('registered', (data) => {
  console.log('[EUREKA-CLIENT][WS][REGISTERED]');
})
.on('status.update', () => {
  toggleMainLight()
  console.log(`[EUREKA-CLIENT][WS][STATUS][UPDATE] State: ${state.mainLight}`)
})
