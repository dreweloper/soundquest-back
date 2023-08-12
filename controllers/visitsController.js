const Visit = require('../models/visitModel');

/**
 * Add a new visit record to the database.
 * @function addVisit
 * @async
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 * @throws {Error} Throws an error if there's an issue during database operation or request processing.
 */
const addVisit = async (req, res) => {

    /**
     * The complete location (the public IP address) of the client (device) that’s making the request.
     * @type {Object}
     */
    const location = req.body;

    const newVisit = new Visit({ location }); // Assign the location object to the location property.


    try {
        
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

        }

    } catch (error) {
        
        console.log(error);

        /**
         * Handles and logs errors that occur during the function's execution.
         * @typedef {Object}
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