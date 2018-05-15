const mainLightsController = {
  create: (request, response, next) => {
    console.log('[LIGHTLIGHTERSERVER][POST][MAIN-LIGHT][CREATE]')
    next()
  }
}

module.exports = mainLightsController
