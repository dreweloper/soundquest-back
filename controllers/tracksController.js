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

        if(response){

            res.status(200).json({
                ok: true,
                response
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

        if(request){

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
    addTrack,
    deleteTrack
};