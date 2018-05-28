const router = require('express').Router()

module.exports = (server) => {
  const LightsRouter = require('./lights')(server)

  router.use('/', LightsRouter)
  return router
}
