const jwt = require('jsonwebtoken');

/**
 * This function generates a JSON Web Token.
 * @function generateJWT
 * @async
 * @param {Object} payload Spotify token object.
 * @returns {String} Spotify token object encoded.
 */
const generateJWT = async (payload) => {

    try {
        
        return await jwt.sign( payload, process.env.JWT_SECRET_KEY, { expiresIn: 3600 });

    } catch (error) {
        
        console.log(error);

    };

};


module.exports = { generateJWT };