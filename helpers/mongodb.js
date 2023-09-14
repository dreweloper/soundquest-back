const mongoose = require('mongoose');

/**
 * Establishes a connection to the 'soundquest' MongoDB database.
 * 
 * @async
 * @function connection
 * @returns {Promise<Object>} A promise that resolves with an object when the database connection is successfully established.
 * @throws {Error} If there is an error connecting to the database.
 */
const connection = async () => {

    const connectionString = process.env.NODE_ENV != 'test' ? process.env.URI_CONNECT : process.env.URI_CONNECT_TEST;

    try {

        /**
         * The database connection response object.
         * @type {Promise<Object>}
         */
        const response = await mongoose.connect(connectionString);

        console.log('Connected to MongoDB.');

        return response;

    } catch (error) {

        console.log(error);

        return {
            ok: false,
            msg: 'Failed to connect to MongoDB.',
            error
        };

    };

};

module.exports = connection;