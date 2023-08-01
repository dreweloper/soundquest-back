const { Router } = require('express');
const router = Router();

const {
    getTracks,
    getTrackByID,
    addTrack,
    deleteTrack
} = require('../controllers/tracksController');


// Gets all tracks saved in MongoDB.
router.get('/', getTracks);

// Gets track by 'track_id' from MongoDB.
router.get('/:id', getTrackByID);

// Add track to MongoDB.
router.post('/', addTrack);

// Delete track of MongoDB.
router.delete('/:id', deleteTrack);


module.exports = router;