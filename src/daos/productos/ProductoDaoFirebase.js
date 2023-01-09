const  { queryProductos }  = require('../../DB/firebaseDB')
const ContenedorFirebase = require('../../contenedores/productos/ContenedorFirebase')

class ProductoDaoFirebase extends ContenedorFirebase{
    constructor(){
        super(queryProductos)
    }
}

module.exports = ProductoDaoFirebase