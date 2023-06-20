const { Schema, model } = require('mongoose');

const clickSchema = new Schema({

    user_id: {
        type: String,
        required: true
    },
    playlist_id: {
        type: String,
        required: true
    },
    track_id: {
        type: String,
        required: true
    }

}, { timestamps: true });


module.exports = model('Click', clickSchema);