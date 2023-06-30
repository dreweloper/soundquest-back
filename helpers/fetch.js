const fetch = require('node-fetch');

const request = async (url, method, token) => {

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