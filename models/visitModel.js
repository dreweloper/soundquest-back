const { Schema, model } = require('mongoose');

const visitSchema = new Schema({

    location: {
        type: Object
    }

}, { timestamps: true });


module.exports = model('Visit', visitSchema);