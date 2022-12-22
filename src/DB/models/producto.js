const {Schema, model} = require('mongoose');

const productoSchema = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    codigo: { type: Number, required: true },
    imagen: { type: String, required: true },
    precio: { type: Number, required: true },
    stock: { type: Number, required: true },
    fecha:{ type : Date, rquired: true}
});

module.exports = model('Producto', productoSchema);