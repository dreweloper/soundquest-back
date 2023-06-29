const { Router } = require('express');
const router = Router();

const { getSpotifyToken } = require('../controllers/tokenController');


router.get('/', getSpotifyToken);


module.exports = router;