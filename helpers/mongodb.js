const mongoose = require('mongoose');

const connection = async () => {

    try {

        const response = await mongoose.connect(process.env.URI_CONNECT);

        if(response){

            console.log('Conectado a MongoDB');

            return response;

        };
        
    } catch (error) {

        console.log(error);

    };

}; //!CONNECTION


module.exports = connection;