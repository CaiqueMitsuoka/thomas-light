let state = { mainLight: false }

const mainLightsController = {
  toggle: (request, response, next) => {
    mainLightsController.toggleMainLight()

    console.log(`[LIGHTLIGHTERSERVER][POST][MAIN-LIGHT][CREATE] State: ${state.mainLight}`)

    response.status(200).json({ mainLight: { status: state.mainLight } })
    next()
  },

  toggleMainLight: () => {
    state.mainLight = !state.mainLight
  }
}

module.exports = mainLightsController
