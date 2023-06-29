const { Router } = require('express');
const router = Router();

const { getSpotifyToken } = require('../controllers/tokenController');


router.post('/', getSpotifyToken);


module.exports = router;