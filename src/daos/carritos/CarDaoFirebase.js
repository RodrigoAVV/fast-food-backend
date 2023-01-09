const  { queryCar }  = require('../../DB/firebaseDB')
const ContenedorCarFirebase = require('../../contenedores/carrito/ContenedorCarFirebase')

class CarDaoFirebase extends ContenedorCarFirebase{
    constructor(){
        super(queryCar)
    }
}

module.exports = CarDaoFirebase