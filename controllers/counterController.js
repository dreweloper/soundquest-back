const Counter = require('../models/counterModel');

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


const addToCounter = async (req, res) => {

    res.send('Capturando la ruta');

}; //!ADDTOCOUNTER


module.exports = {
    getCount,
    addToCounter
}