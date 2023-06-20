
const getCount = async (req, res) => {

    res.send('Capturando la ruta');

}; //!GETCOUNT


const addToCounter = async (req, res) => {

    res.send('Capturando la ruta');

}; //!ADDTOCOUNTER


module.exports = {
    getCount,
    addToCounter
}