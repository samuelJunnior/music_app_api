const router = require('express').Router();

const musicController = require('../../app/controllers/music_controller');

router.route('/music')
    .get((req, res, next) => musicController.findAll(req, res, next));

router.route('/music/favorites')
    .get((req, res, next) => musicController.findFavorites(req, res, next));

router.route('/music/title/:title')
    .get((req, res, next) => musicController.findByTitle(req, res, next, next));

router.route('/music/genre/:genre')
    .get((req, res, next) => musicController.findByGenre(req, res, next));

router.route('/music/favorite/:id')
    .put((req, res, next) => musicController.favoriteMusic(req, res, next));

router.route('/music/genres')
    .get((req, res, next) => musicController.findMusicGenres(req, res, next));

module.exports = router;