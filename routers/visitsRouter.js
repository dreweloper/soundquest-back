const { Router } = require('express');
const router = Router();

const { addVisit } = require('../controllers/visitsController');

/** Adds a new visit record to the database. */
router.post('/', addVisit);


module.exports = router;