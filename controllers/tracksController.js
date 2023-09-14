const Track = require('../models/trackModel');

/**
 * Handles and logs errors that occur during the function's execution.
 * @typedef {Object} ErrorObject
 * @property {Boolean} ok - Indicates if the request was successful (false).
 * @property {String} msg - A generic error message instructing the client to contact the administrator.
 * @property {Object} error - The error object caught during the catch block.
 */

/**
 * Gets all the tracks from the database and sends a JSON response to the client.
 * 
 * @async
 * @function getTracks
 * @param {Object} req - The request object containing information about the incoming HTTP request.
 * @param {Object} res - The response object used to send back an HTTP response to the client.
 */
const getTracks = async (req, res) => {

    try {

        /**
         * The database operation response object.
         * @type {Promise<Object>}
         */
        const response = await Track.find();

        if (response.length > 0) {

            res.status(200).json({
                ok: true,
                data: response
            });

        } else {

            res.status(404).json({
                ok: false,
                msg: 'There are no tracks saved in the database.'
            });

        };

    } catch (error) {

        console.log(error);

        /**
         * @type {ErrorObject}
         */
        res.status(500).json({
            ok: false,
            msg: 'Internal server error. Something went wrong while processing your request.',
            error
        });

    };

}; //!GETTRACKS

/**
 * Gets a track by its Spotify ID from the database and sends a JSON response to the client.
 * 
 * @async
 * @function getTrackById
 * @param {Object} req - The request object containing information about the incoming HTTP request.
 * @param {Object} res - The response object used to send back an HTTP response to the client.
 */
const getTrackById = async (req, res) => {

    /**
     * The ID of the track to retrieve, obtained from the request parameters.
     * @type {String}
     */
    const { id } = req.params;

    try {

        /**
         * The database operation response object.
         * @type {Promise<Object>}
         */
        const response = await Track.find(
            { "track.track_id": id }, // Filter.
            { "createdAt": 0, "updatedAt": 0, "__v": 0 } // Projection: fields excluded.
        ).limit(1); // Options: returns the first document that matches the search criteria.

        if (response.length == 0) {

            res.status(404).json({
                ok: false,
                msg: `The track with ID ${id} does not exist in the database.`
            });

        } else {

            res.status(200).json({
                ok: true,
                data: response
            });

        };

    } catch (error) {

        console.log(error);

        /**
         * @type {ErrorObject}
         */
        res.status(500).json({
            ok: false,
            msg: 'Internal server error. Something went wrong while processing your request.',
            error
        });

    };

}; //!GETTRACKBYID

/**
 * Gets the total count of the tracks stored in the database and sends a JSON response to the client.
 * 
 * @async
 * @function getTracksCount
 * @param {Object} req - The request object containing information about the incoming HTTP request.
 * @param {Object} res - The response object used to send back an HTTP response to the client.
 */
const getTracksCount = async (req, res) => {

    try {

        /**
         * The database operation response object.
         * @type {Promise<Object>}
         */
        const response = await Track.estimatedDocumentCount();

        res.status(200).json({
            ok: true,
            data: response
        });

    } catch (error) {

        console.log(error);

        /**
         * @type {ErrorObject}
         */
        res.status(500).json({
            ok: false,
            msg: 'Internal server error. Something went wrong while processing your request.',
            error
        });

    };

}; //!GETTRACKSCOUNT

/**
 * Adds a new track document to the database and sends a JSON response to the client.
 * 
 * @async
 * @function addTrack
 * @param {Object} req - The request object containing information about the incoming HTTP request.
 * @param {Object} res - The response object used to send back an HTTP response to the client.
 */
const addTrack = async (req, res) => {

    // The 'req.body' object contains the properties of the 'Track' model.
    const newTrack = new Track(req.body);

    try {

        /**
         * The database operation response object.
         * @type {Promise<Object>}
         */
        const response = await newTrack.save();

        if (response) {

            res.status(201).json({
                ok: true,
                data: response
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: 'The track could not be saved in the database.'
            });

        };

    } catch (error) {

        console.log(error);

        /**
         * @type {ErrorObject}
         */
        res.status(500).json({
            ok: false,
            msg: 'Internal server error. Something went wrong while processing your request.',
            error
        });

    };

}; //!ADDTRACK

/**
 * Removes a track by its MongoDB `_id` from the database and sends a JSON response to the client.
 * 
 * @async
 * @function deleteTrack
 * @param {Object} req - The request object containing information about the incoming HTTP request.
 * @param {Object} res - The response object used to send back an HTTP response to the client.
 */
const deleteTrack = async (req, res) => {

    /**
     * The ID of the track to retrieve, obtained from the request parameters.
     * @type {String}
     */
    const { id } = req.params;

    try {

        /**
         * The database operation response object.
         * @type {Promise<Object>}
         */
        const response = await Track.findByIdAndDelete(id);

        if (!response) {

            res.status(404).json({
                ok: false,
                msg: `The track with ID ${id} does not exist in the database.`
            });

        } else {

            res.status(200).json({
                ok: true,
                data: response
            });

        };

    } catch (error) {

        console.log(error);

        /**
         * @type {ErrorObject}
         */
        res.status(500).json({
            ok: false,
            msg: 'Internal server error. Something went wrong while processing your request.',
            error
        });

    };

}; //!DELETETRACK


module.exports = {
    getTracks,
    getTracksCount,
    getTrackById,
    addTrack,
    deleteTrack
};