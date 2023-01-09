const  { queryProductos }  = require('../../DB/firebaseDB')
const ContenedorFirebaseProducto = require('../../contenedores/productos/ContenedorFirebaseProducto')

class ProductoDaoFirebase extends ContenedorFirebaseProducto{
    constructor(){
        super(queryProductos)
    }
}

module.exports = ProductoDaoFirebase