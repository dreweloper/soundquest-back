const { Router } = require('express');
const router = Router();

const { getToken } = require('../controllers/spotifyController');


router.get('/', getToken);


module.exports = router;