const { Router } = require('express');
const router = Router();

const {
    getTracks,
    getTrackById,
    getTracksCount,
    addTrack,
    deleteTrack
} = require('../controllers/tracksController');


// Gets all the tracks from the database.
router.get('/tracks', getTracks);

// Gets a track by its Spotify ID from the database.
router.get('/track/:id', getTrackById);

// Gets the total count of the tracks stored in the database.
router.get('/tracks/counter', getTracksCount);

// Adds a new track document to the database.
router.post('/tracks', addTrack);

// Removes a track by its MongoDB `_id` from the database.
router.delete('/track/:id', deleteTrack);


module.exports = router;