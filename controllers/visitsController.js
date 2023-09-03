const Visit = require('../models/visitModel');

/**
 * Adds a new visit record to the database and sends a JSON response to the client.
 * 
 * @async
 * @function addVisit
 * @param {Object} req - The request object containing information about the incoming HTTP request.
 * @param {Object} res - The response object used to send back an HTTP response to the client.
 */
const addVisit = async (req, res) => {

    /**
     * The complete location (the public IP address) of the client (device) that’s making the request.
     * @type {Object}
     */
    const location = req.body;

    const newVisit = new Visit({ location }); // Assign the location object to the location property.


    try {
        
        /**
         * The database operation response object.
         * @type {Promise<Object>}
         */
        const response = await newVisit.save();

        if(response) {

            res.status(201).json({
                ok: true,
                data: response
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: 'Bad request. The provided data is invalid or incomplete.'
            });

        };

    } catch (error) {
        
        console.log(error);

        /**
         * Handles and logs errors that occur during the function's execution.
         * @type {Object}
         * @property {Boolean} ok - Indicates if the request was successful (false).
         * @property {String} msg - A generic error message instructing the client to contact the administrator.
         * @property {Object} error - The error object caught during the catch block.
         */
        res.status(500).json({
            ok: false,
            msg: 'Internal server error. Something went wrong while processing your request.',
            error
        });
    };

}; //!ADDVISIT


module.exports = { addVisit };