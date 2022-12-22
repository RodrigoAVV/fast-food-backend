const ContenedorArchivo = require('../../contenedores/productos/ContenedorArchivo')

class ProductoDaoArchivo extends ContenedorArchivo{
    constructor(){
        super('../../../DB/productos.json')
    }
}
module.exports = ProductoDaoArchivo