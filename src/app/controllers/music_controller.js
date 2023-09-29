const { default: mongoose } = require("mongoose");
const MusicModel = require("../models/music_model");
const {
  ApiError,
  NotFountError,
  InternalServerError,
} = require("../error/api_error");

const musicController = {
  findAll: async (req, res, next) => {
    try {
      const responser = await MusicModel.find();
      res.status(200).json(responser);
    } catch (error) {
      const err = new InternalServerError(`Erro ao buscar músicas: ${error}`);
      next(err);
    }
  },

  findByTitle: async (req, res, next) => {
    try {
      const term = req.params.title;
      const repoonser = await MusicModel.find({ title: new RegExp(term, "i") });

      res.status(200).json(repoonser);
    } catch (error) {
      const err = new InternalServerError(`Erro ao buscar músicas: ${error}`);
      next(err);
    }
  },

  findByGenre: async (req, res, next) => {
    try {
      const term = req.params.genre;
      const repoonser = await MusicModel.find({ genre: new RegExp(term, "i") });

      res.status(200).json(repoonser);
    } catch (error) {
      const err = new InternalServerError(`Erro ao buscar músicas: ${error}`);
      next(err);
    }
  },

  favoriteMusic: async (req, res, next) => {
    try {
      const ObjectId = mongoose.Types.ObjectId;
      const idMusic = req.params.id;

      var responser = await MusicModel.findById(new ObjectId(idMusic));

      if (!responser) {
        throw new NotFountError("Música não encontrada.");
      }

      responser.isFavoriteMusic = !responser.isFavoriteMusic;
      responser = await responser.save();

      res.status(200).json(responser);
    } catch (error) {
      if (error instanceof ApiError) {
        next(error);
      }

      const err = new InternalServerError(`Erro ao buscar músicas: ${error}`);
      next(err);
    }
  },

  findFavorites: async (req, res, next) => {
    try {
      const responser = await MusicModel.find({ isFavoriteMusic: true });
      res.status(200).json(responser);
    } catch (error) {
      const err = new InternalServerError(
        `Erro ao buscar músicas favoritas: ${error}`
      );
      next(err);
    }
  },

  findMusicGenres: async (req, res, next) => {
    try {
      const genres = await MusicModel.distinct("genre");
      res.status(200).json(genres);
    } catch (error) {
      const err = new InternalServerError(
        `Erro ao buscar gêneros musicais: ${error}`
      );
      next(err);
    }
  },
};

module.exports = musicController;
