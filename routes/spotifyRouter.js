const { Router } = require('express');
const router = Router();

const {
    getToken,
    getUserPlaylists,
    getPlaylist
} = require('../controllers/spotifyController');


router.get('/token', getToken);

router.get('/user-playlists/:user_id', getUserPlaylists);

router.get('/playlist/:playlist_id', getPlaylist);


module.exports = router;