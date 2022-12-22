const {Schema, model} = require('mongoose');

const carSchema = new Schema({
    timestamp: { type: Date, required: true },
    products: { type: Array, required: true }
});

module.exports = model('Car', carSchema);