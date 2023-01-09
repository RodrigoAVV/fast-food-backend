const mongoDB = require('../../DB/mongoDB')
const Car = require('../../DB/models/car')
const Producto = require('../../DB/models/producto')
const ContenedorCarMongoDB = require('../../contenedores/carrito/ContenedorCarMongoDB')

class CarDaoMongoDB extends ContenedorCarMongoDB{
    constructor(){
        super(mongoDB,Producto,Car)
    }
}
module.exports = CarDaoMongoDB