const mainLightRouter = require('express').Router()
const mainLightsController = require('../controllers/mainLightsController')

mainLightRouter.post('/', mainLightsController.toggle);

module.exports = mainLightRouter;
