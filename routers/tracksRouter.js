const { Router } = require('express');
const router = Router();

const { getTracks, addTrack } = require('../controllers/tracksController');


// Get count.
router.get('/', getTracks);

// Add to counter.
router.post('/', addTrack);


module.exports = router;