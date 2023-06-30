const { Router } = require('express');
const router = Router();

const {
    getToken,
    getUserPlaylists,
    getPlaylist,
    getTrack
} = require('../controllers/spotifyController');


router.get('/token', getToken);

router.get('/user-playlists/:user_id', getUserPlaylists);

router.get('/playlist/:playlist_id', getPlaylist);

router.get('/track/:track_id', getTrack);


module.exports = router;