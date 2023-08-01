const Track = require('../models/trackModel');

/**
 * The function fetches all documents in the 'tracks' collection from the MongoDB 'soundquest' database.
 * @function getTracks
 * @async
 * @param {Object} req Receives the request object.
 * @param {Object} res Receives the response object.
 * @returns {Promise}
 */
const getTracks = async (req, res) => {

    try {

        const response = await Track.find();

        if(response.length > 0){

            res.status(200).json({
                ok: true,
                data: response
            });

        } else {

            res.status(400).json({
                ok: false,
                msg: 'No hay documentos guardados en la base de datos.'
            });

        };
        
    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Error: contacte con el administrador.',
            error
        });
        
    };

}; //!GETTRACKS

/**
 * Retrieve a track from the database based on the given track ID.
 * @function getTrackByID
 * @async
 * @param {Object} req The request object containing information about the incoming HTTP request.
 * @param {Object} res The response object used to send back an HTTP response to the client.
 * @returns {Promise<void>} The function doesn't return a value directly but sends a response to the client.
 */
const getTrackByID = async (req, res) => {

    /**
     * The ID of the track to retrieve, obtained from the request parameters.
     * @type {String}
     */
    const { id } = req.params;

    
    try {
      
        /**
         * Retrieve all tracks from the MongoDB collection 'Track'.
         * @type {Array<Object>}
         */
        const response = await Track.find();

        /**
         * Find the track with the given ID in the response array.
         * @type {Object}
         */
        const track = response.find(item => item.track.track_id == id);

        if(track){

            /**
             * Send a successful response with the track information.
             * @type {Object}
             * @property {Boolean} ok - Indicates if the request was successful (true).
             * @property {Object} data - Contains the track information.
             */
            res.status(200).json({
                ok: true,
                data: track
            });

        } else {

            /**
             * Send an error response if the track is not found in the database.
             * @type {Object}
             * @property {Boolean} ok - Indicates if the request was successful (false).
             * @property {String} msg - Error message indicating that the track doesn't exist in the database.
             */
            res.status(400).json({
                ok: false,
                msg: `El track con ID ${id} no existe en la base de datos.`
            });

        };
        
    } catch (error) {
        
        console.log(error);

        /**
         * Handle and log errors that occur during the function's execution.
         * @type {Object}
         * @property {Boolean} ok - Indicates if the request was successful (false).
         * @property {String} msg - Generic error message instructing the client to contact the administrator.
         * @property {Object} error - The error object caught during the catch block.
         */
        res.status(500).json({
            ok: false,
            msg: 'Error: contacte con el administrador.',
            error
        });

    };

}; //!GETTRACKBYID

/**
 * The function adds a new document with the data received through the 'body' object to the 'tracks' collection of the MongoDB 'soundquest' database.
 * @function addTrack
 * @async
 * @param {Object} req Receives the request object: body.
 * @param {Object} res Receives the response object.
 * @returns {Promise}
 */
const addTrack = async (req, res) => {

    const newTrack = new Track(req.body); // 'req.body' receives the required properties of 'trackModel'.
    

    try {

        const request = await newTrack.save();

        if(!request){

            res.status(400).json({
                ok: false,
                msg: 'Error: no se ha podido guardar el documento en la base de datos.'
            });

        } else {

            res.status(201).json({
                ok: true,
                data: request
            });

        };

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Error: contacte con el administrador.',
            error
        });

    };

}; //!ADDTRACK

/**
 * The function deletes by ID a document from the "tracks" collection of the MongoDB "soundquest" database.
 * @function deleteTrack
 * @async
 * @param {Object} req Receives the request object: params.
 * @param {Object} res Receives the response object.
 * @returns {Promise}
 */
const deleteTrack = async (req, res) => {

    const id = req.params.id; // Value of '_id' to query by.


    try {
        
        const request = await Track.findByIdAndDelete(id);

        if(!request){

            res.status(400).json({
                ok: false,
                msg: `Error: no se ha podido eliminar el documento con ID ${id}.`
            });

        } else {

            res.status(200).json({
                ok: true,
                data: request
            });

        };

    } catch (error) {
        
        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Error: contacte con el administrador.',
            error
        });

    };

}; //!DELETETRACK


module.exports = {
    getTracks,
    getTrackByID,
    addTrack,
    deleteTrack
};