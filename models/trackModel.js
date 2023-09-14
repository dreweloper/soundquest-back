const { Schema, model } = require('mongoose');

/**
 * Data schema to represent a music track.
 * @type {Object}
 * @property {Object} host - Information about the app's host.
 * @property {String} host.username - Host's Spotify username.
 * @property {String} host.profile_url - Host's Spotify profile URL.
 * @property {Object} playlist - Information about the playlist to which the track belongs.
 * @property {String} playlist.playlist_id - Playlist Spotify ID.
 * @property {String} playlist.playlist_url - Playlist Spotify URL.
 * @property {Object} track - Details of the music track.
 * @property {String} track.track_id - Track Spotify ID.
 * @property {String} track.name - Track name.
 * @property {String} track.artist - Artist of the track.
 * @property {String} track.album - Album of the track.
 * @property {String} track.artwork - Album cover URL of the track.
 * @property {String} track.track_url - Track Spotify URL.
 */
const trackSchema = new Schema({

    host: {
        username: { type: String, required: true },
        profile_url: { type: String, required: true }
    },
    playlist: {
        playlist_id: { type: String, required: true },
        playlist_url: { type: String, required: true }
    },
    track: {
        track_id: { type: String, required: true },
        name: { type: String, required: true },
        artist: { type: String, required: true },
        album: { type: String, required: true },
        artwork: { type: String, required: true },
        track_url: { type: String, required: true }
    }
}, { timestamps: true });


module.exports = model('Track', trackSchema);