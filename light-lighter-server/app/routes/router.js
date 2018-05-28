const router = require('express').Router();
const mainLightsRouter = require('./mainLights');

router.use('/main-light', mainLightsRouter);

module.exports = router;
