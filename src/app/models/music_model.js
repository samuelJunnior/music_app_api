const mongoose = require('mongoose');

const { Schema } = mongoose;

const musicSchema = new Schema(
    {
        title: { type: String, required: true },
        path: { type: String, required: true },
        duration: { type: Number, required: true },
        isFavoriteMusic: { type: Boolean, default: false, required: true },
        genre: {type: String, required: true},
        img: String
    }
);

const Music = mongoose.model('Music', musicSchema);

module.exports = Music;