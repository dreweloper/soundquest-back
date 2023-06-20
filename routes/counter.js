const { Router } = require('express');
const router = Router();

const { getCount, addToCounter } = require('../controllers/counterController');


// Get count.
router.get('/', getCount);

// Add to counter.
router.post('/', addToCounter);


module.exports = router;