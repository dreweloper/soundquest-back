const { Schema, model } = require('mongoose');

const trackSchema = new Schema({

    playlist_id: {
        type: String,
        required: true
    },
    track: {
        track_id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        artist: {
            type: String,
            required: true
        },
        album: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }

}, { timestamps: true });


module.exports = model('Track', trackSchema);