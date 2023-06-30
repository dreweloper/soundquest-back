const { request } = require('../helpers/fetch');
const fetch = require('node-fetch');

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

    /**
     * Fetch options.
     * @typedef {Object} options
     * @property {String} method HTTP verb for the request.
     * @property {Object} body URLSearchParams object that contains the Client ID and Client Secret, along with the grant_type parameter set to client_credentials.
     * @property {Object} headers Content-type header set to the application/x-www-form-urlencoded value.
     */
    const options = {
        method: 'POST',
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
            'client_id': process.env.CLIENT_ID,
            'client_secret': process.env.CLIENT_SECRET
        }),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };

    try {

        const request = await fetch(url, options);

        const response = await request.json();

        if(request.status == 200){

            res.status(200).json({
                ok: true,
                data: response
            });

        } else {

            res.status(request.status).json({
                ok: false,
                error: response
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
        
        const response = await request(url, 'GET', authorization);
        
        console.log(response.status);

    } catch (error) {
      
        console.log(error);
        
    };

    res.send('Capturando la ruta');

};


module.exports = {
    getToken,
    getUserPlaylists
};