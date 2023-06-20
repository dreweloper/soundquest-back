const Counter = require('../models/counterModel');

/**
 * Obtiene todos los documentos de la colección 'clicks' de la base de datos 'counter' de MongoDB.
 * @function getCount
 * @async
 * @param {Object} req Recibe el objeto de la solicitud.
 * @param {Object} res Recibe el objeto de la respuesta.
 * @returns {Promise}
 */
const getCount = async (req, res) => {

    try {

        const response = await Counter.find();

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
            msg: 'Error: contacte con el administrador',
        });
        
    };

}; //!GETCOUNT

/**
 * Añade un nuevo documento con los datos recibidos a través del objeto 'body' a la colección 'clicks' de la base de datos 'counter' de MongoDB.
 * @function addToCounter
 * @async
 * @param {Object} req Recibe el objeto de la solicitud: body.
 * @param {Object} res Recibe el objeto de la respuesta.
 * @returns {Promise}
 */
const addToCounter = async (req, res) => {

    const click = new Counter(req.body); // 'req.body' recibe las propiedades requeridas por el modelo 'counterModel'.

    try {

        const request = await click.save();

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
            msg: 'Error: contacte con el administrador'
        });

    };

}; //!ADDTOCOUNTER


module.exports = {
    getCount,
    addToCounter
};