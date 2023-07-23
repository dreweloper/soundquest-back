const { Router } = require('express');
const router = Router();

const {
    getTracks,
    addTrack,
    deleteTrack
} = require('../controllers/tracksController');


// Get all tracks saved in MongoDB.
router.get('/', getTracks);

// Add track to MongoDB.
router.post('/', addTrack);

// Delete track of MongoDB.
router.delete('/:id', deleteTrack);


module.exports = router;