const fs = require('fs')

class ContenedorArchivo{
    constructor(ruta){
        this.ruta = ruta
    }

    async getProducts(){
        try {
            console.log(__dirname + this.ruta)
            const products = await fs.promises.readFile(__dirname + this.ruta)
            return{
                success:true,
                data: JSON.parse(products)
            }
        } catch (err) {
            console.error(err)
            return{
                success:false,
                message:err.message
            }
        }
    }

    async getProduct(uuid){
        try {
            const products = await fs.promises.readFile(__dirname + this.ruta)
            const productsObject = JSON.parse(products)
            const product = productsObject.filter(i => i.uuid ==uuid)
            return{
                success:true,
                data:product[0]
            }
        } catch (err) {
            console.error(err)
            return{
                success:false,
                message:err.message
            }
        }
    }

    async createProduct(data){
        try {
            const products = await fs.promises.readFile(__dirname + this.ruta)
            const productsObject = JSON.parse(products)
            productsObject.push(data)
            await fs.promises.writeFile(__dirname + this.ruta, JSON.stringify(productsObject,null,2))
            return{
                success:true,
                data
            }
        } catch (err) {
            console.error(err)
            return{
                success:false,
                message:err.message
            }
        }
    }

    async updateProduct(uuid,data){
        try {
            const products = await this.getProducts()
            const newList = await products.data.map(i => {
                if(i.uuid == uuid){
                    return {
                        timestamps:data.timestamps,
                        nombre:data.nombre,
                        descripcion:data.descripcion,
                        codigo:data.codigo,
                        imagen:data.imagen,
                        precio:data.precio,
                        stock:data.stock,
                        uuid
                    }
                }
                return i
            })
            await fs.promises.writeFile(__dirname + this.ruta, JSON.stringify(newList,null,2))
            return{
                success:true,
                data:`Product ${uuid} update successFull`
            }
        } catch (err) {
            console.error(err)
            return{
                success:false,
                message:err.message
            }
        }
    }

    async deleteProduct(uuid){
        try {
            const products = await fs.promises.readFile(__dirname + this.ruta)
            const productsObject = JSON.parse(products)
            console.log(productsObject)
            const newProducts = productsObject.filter(i => i.uuid != uuid)
            await fs.promises.writeFile(__dirname + this.ruta, JSON.stringify(newProducts,null,2))
            return{
                success:true,
                data:`Product ${uuid} deleted successFull`
            }
        } catch (err) {
            console.error(err)
            return{
                success:false,
                message:err.message
            }
        }
        
    }
}

module.exports = ContenedorArchivo