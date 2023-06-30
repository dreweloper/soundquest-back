const fetch = require('node-fetch');

const request = async (url, method, token) => {

    /**
     * Fetch options.
     * @typedef {Object} options
     * @property {String} method HTTP verb for the request.
     * @property {Object} body URLSearchParams object that contains the Client ID and Client Secret, along with the grant_type parameter set to client_credentials.
     * @property {Object} headers Content-type header set to the application/x-www-form-urlencoded value or 'Authentication: Bearer token'.
     */
    let options = {};


    if(method == 'POST'){
        options = {
            method,
            body: new URLSearchParams({
                'grant_type': 'client_credentials',
                'client_id': process.env.CLIENT_ID,
                'client_secret': process.env.CLIENT_SECRET
            }),
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
    };

    if(method == 'GET'){
        options = {
            headers: { Authentication: token }
        }
    };


    try {
        
        const response = await fetch(url, options);

        return response;

    } catch (error) {
        
        console.log(error);

    };
};


module.exports = { request };