const ProductoDaoArchivo = require('../daos/productos/ProductoDaoArchivo')
const ProductoDaoMongoDB = require('../daos/productos/ProductoDaoMongoDB')
const CarDaoMongoDB = require('../daos/carritos/CarDaoMongoDB')
const ProductoDaoFirebase = require('./productos/ProductoDaoFirebase')
//const CarDaoArchivo = require('../daos/carritos/CarDaoArchivo')

const getDao = () => {
    const dao = process.env.DAO
    switch(dao){
        case 'file':
            return{
                productos: new ProductoDaoArchivo(),
                //car: new CarDaoArchivo()
            }    
            break
        case 'mongoDB':
            return{
                productos: new ProductoDaoMongoDB(),
                car: new CarDaoMongoDB()
            }
            break
        case 'firebase':
            return{
                productos: new ProductoDaoFirebase()
            }
    }
}

module.exports = getDao