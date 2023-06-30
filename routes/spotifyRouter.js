const { Router } = require('express');
const router = Router();

const {
    getToken,
    getUserPlaylists
} = require('../controllers/spotifyController');


router.get('/token', getToken);

router.get('/user-playlists/:user_id', getUserPlaylists);


module.exports = router;