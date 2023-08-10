const { Router } = require('express');
const router = Router();

const {
    getTracks,
    getTracksCount,
    getTrackByID,
    addTrack,
    deleteTrack
} = require('../controllers/tracksController');


// Gets all tracks saved in MongoDB.
router.get('/tracks', getTracks);

// Estimates the number of documents in the MongoDB 'tracks' collection.
router.get('/tracks/counter', getTracksCount);

// Gets track by 'track_id' from MongoDB.
router.get('/track/:id', getTrackByID);

// Add track to MongoDB.
router.post('/tracks', addTrack);

// Delete track of MongoDB.
router.delete('/track/:id', deleteTrack);


module.exports = router;