const { request } = require('../helpers/fetch');

const urlBase = 'https://api.spotify.com';

/**
 * Request an access token.
 * @function getToken
 * @async
 * @param {Object} req Request object.
 * @param {Object} res Response object.
 * @returns {Promise}
 */
const getToken = async (req, res) => {

    /**
     * @type {String} The token endpoint URI.
     */
    const url = 'https://accounts.spotify.com/api/token';

    try {

        const response = await request(url, 'POST');

        if(response.ok){

            const { ok, data } = response;

            res.status(200).json({
                ok,
                data
            });

        } else {

            const { ok, error } = response;

            res.status(400).json({
                ok,
                error
            });

        };
        
    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Oops! Something went wrong on our server. We are working to solve the problem as soon as possible. Sorry for the inconvenience.',
        });
    };
};


const getUserPlaylists = async (req, res) => {

    const { user_id } = req.params; // URL user ID.

    const { authorization } = req.headers; // Authorization header with the access token.

    const url = `${urlBase}/v1/users/${user_id}/playlists`;


    try {
        
        const { ok, data } = await request(url, 'GET', authorization);

        if(ok){

            res.status(200).json({ ok, data });

        } else {

            const { error } = data;

            res.status(error.status).json({
                ok,
                error
            });
        };
        
    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Oops! Something went wrong on our server. We are working to solve the problem as soon as possible. Sorry for the inconvenience.',
        });        
    };
};


module.exports = {
    getToken,
    getUserPlaylists
};