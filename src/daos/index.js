const ProductoDaoArchivo = require('../daos/productos/ProductoDaoArchivo')
const ProductoDaoMongoDB = require('../daos/productos/ProductoDaoMongoDB')
const CarDaoMongoDB = require('../daos/carritos/CarDaoMongoDB')

const getDao = () => {
    const dao = process.env.DAO
    switch(dao){
        case 'file':
            return{
                productos: new ProductoDaoArchivo(),
                car: new CarDaoMongoDB()
            }    
            break
        case 'mongoDB':
            
            return{
                productos: new ProductoDaoMongoDB()
            }
            break
    }
}

module.exports = getDao