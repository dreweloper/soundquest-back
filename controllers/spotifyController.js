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

        const data = await response.json();

        if(response.status == 200){

            res.status(200).json({
                ok: true,
                data
            });

        } else {

            res.status(response.status).json({
                ok: false,
                error: data
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