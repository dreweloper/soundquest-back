const { Schema, model } = require('mongoose');

const trackSchema = new Schema({

    playlist: {
        playlist_id: {
            type: String,
            required: true
        },
        playlist_url: {
            type: String,
            required: true
        }
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
        artwork: {
            type: String,
            required: true
        },
        track_url: {
            type: String,
            required: true
        }
    }

}, { timestamps: true });


module.exports = model('Track', trackSchema);