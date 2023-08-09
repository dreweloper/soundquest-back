const mongoose = require('mongoose');

const connection = async () => {

    try {

        const response = await mongoose.connect(process.env.URI_CONNECT);

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