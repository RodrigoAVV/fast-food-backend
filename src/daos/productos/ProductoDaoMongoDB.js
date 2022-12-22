const mongoDB = require('../../DB/mongoDB')
const Producto = require('../../DB/models/producto')
const ContenedorMongoDB = require('../../contenedores/productos/ContenedorMongoDB')

class ProductoDaoMongoDB extends ContenedorMongoDB{
    constructor(){
        super(mongoDB,Producto)
    }
}
module.exports = ProductoDaoMongoDB