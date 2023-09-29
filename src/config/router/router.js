const router = require('express').Router();

var musicRouter = require('./music_router');
router.use('/v1', musicRouter);

module.exports = router;