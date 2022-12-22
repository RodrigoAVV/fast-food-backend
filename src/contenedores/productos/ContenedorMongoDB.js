const { identity } = require("lodash")

class ContenedorMongoDB{
    constructor(mongoDB,Producto){
        this.mongoDB = mongoDB
        this.Producto = Producto
    }

    async getProducts(){
        try {
            let data = false
            data = await this.Producto.find()
            if(data){
                return{
                    success:true,
                    data: data
                }
            }else{
                return{
                    success: true,
                    data: 'No existen productos disponibles'
                }
            }
        } catch (err) {
            return{
                success:false,
                message:err.message
            }
        }
    }

    async saveProduct(newProducto){
        try {
            const newProduct = new this.Producto({...newProducto})
            await newProduct.save()
            if(newProduct){
                return{
                    success:true,
                    data: newProduct
                }
            }else{
                return{
                    success: false,
                    data: 'No se pudo registrar este producto'
                }
            }
        } catch (err) {
            return{
                success:false,
                message:err.message
            }
        }
    }

    async getProductId(uuid){
        try {
            let data = await this.Producto.findOne({_id: uuid})
            if(data){
                return{
                    success: true,
                    data: data
                }
            }else{
                return{
                    success: false,
                    data: 'No se encuentra este producto'
                }
            }
        } catch (err) {
            return{
                success:false,
                message:err.message
            }
        }
    }

    async deleteProductId(idProduct){
        try {
            const res = await this.Producto.findByIdAndDelete(idProduct)
            //console.log(res)
            if(res){
                return{
                    success: true,
                    data: res
                }
            }else{
                return{
                    success: false,
                    data: 'No se encuentra producto'
                }
            }
        } catch (err) {
            return{
                success:false,
                message:err.message
            }
        }
       
    }

    async updateProductId(idProduct,updateProducto){
       try {
        let updateProduct = await this.Producto.findByIdAndUpdate(idProduct,{
            ...updateProducto
        })
        if(updateProduct){
            return{
                success:true,
                data:updateProduct
            }
        }else{
            return{
                success:false,
                data: 'Producto no encontrado'
            }
        }
       } catch (err) {
        return{
            success:false,
            data:err.message
        }
       }
        
    }
}

module.exports = ContenedorMongoDB