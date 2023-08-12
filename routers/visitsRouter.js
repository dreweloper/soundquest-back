const { Router } = require('express');
const router = Router();

const { addVisit } = require('../controllers/visitsController');

// Add visitor IP address location information to MongoDB.
router.post('/', addVisit);


module.exports = router;