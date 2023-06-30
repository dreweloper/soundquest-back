const { request } = require('../helpers/fetchAPI');
const { randomly } = require('../helpers/randomElement');

/**
 * @type {String} The base address of Spotify Web API.
 */
const urlBase = 'https://api.spotify.com';

/**
 * Request an access token.
 * @function getToken
 * @async
 * @param {Object} req Request object.
 * @param {Object} res Response object.
 * @returns {Object} JSON.
 */
const getToken = async (req, res) => {

    /**
     * @type {String} The token endpoint URI.
     */
    const url = 'https://accounts.spotify.com/api/token';

    try {

        const response = await request(url, 'POST');

        if(response.ok){ // Conditional: if "response" returns "ok = true"

            const { ok, data } = response; // Destructuring of properties "ok" and "data" of the object "response".

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
}; //!GETTOKEN

/**
 * Get a list of the playlists owned or followed by a Spotify user.
 * @function getUserPlaylists
 * @async
 * @param {Object} req Request object.
 * @param {Object} res Response object.
 * @returns
 */
const getUserPlaylists = async (req, res) => {

    /**
     * @type {String} User ID.
     */
    const { user_id } = req.params;

    /**
     * @type {String} Authorization header that contains "token_type" (Bearer) and "access_token".
     */
    const { authorization } = req.headers;

    /**
     * @type {String} Get user's playlists endpoint.
     */
    const url = `${urlBase}/v1/users/${user_id}/playlists`;


    try {
        
        const { ok, data } = await request(url, 'GET', authorization); // Destructuring of the properties "ok" and "data" of the fetch's response object.

        if(ok){

            /**
             * @type {Array} It contains an object with information for each playlist.
             */
            const { items } = data; // Destructuring of the property "items" of the "data" object.

            /**
             * @type {String} The Spotify ID for the playlist.
             */
            const playlist_id = randomly(items);

            res.status(200).json({ ok, playlist_id });

        } else {

            const { error } = data; // Destructuring of the property "error" of the "data" object.

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
}; //!GETUSERPLAYLISTS


module.exports = {
    getToken,
    getUserPlaylists
};