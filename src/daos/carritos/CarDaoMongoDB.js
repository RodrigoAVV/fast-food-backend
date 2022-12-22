const mongoDB = require('../../DB/mongoDB')
const Car = require('../../DB/models/car')
const Producto = require('../../DB/models/producto')
const ContenedorCar = require('../../contenedores/carrito/ContenedorCar')

class CarDaoMongoDB extends ContenedorCar{
    constructor(){
        super(mongoDB,Producto,Car)
    }
}
module.exports = CarDaoMongoDB