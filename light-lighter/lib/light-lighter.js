const gpio = require('rpi-gpio')

const lightLighter = {
  io4: 7,

  off: () => {
    gpio.destroy();
    console.log('[LIGHTLIGHTER][DESTROY] Success')
  },

  on: () => {
    gpio.setup(lightLighter.io4, gpio.DIR_OUT, lightLighter.handleSetup)
  },

  handleSetup: (error) => {
    if(error) {
      return lightLighter.handleChannelError(error)
    }

    gpio.write(lightLighter.io4, true, lightLighter.handlePinWrite)
  },

  handlePinWrite: (error) => {
    if(error) {
      return lightLighter.handlePinWriteError(error)
    }

    console.log(`[LIGHTLIGHTER][GPIO_${lightLighter.io4}][WRITE] true`)
  },

  handleChannelError: (error) => {
    console.log('[LIGHTLIGHTER][CHANNEL] Open Error', error)
    throw error
  },

  handlePinWriteError: (error) => {
    console.log(`[LIGHTLIGHTER][GPIO_${lightLighter.io4}][WRITE] Error`, error)
    throw error
  },
}

module.exports = lightLighter
