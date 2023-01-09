class ContenedorFirebase{
    constructor(queryProductos){
        this.queryProductos = queryProductos
    }

    async getAllProductos(){
        try {
            //console.log(this.queryProductos)
            const productosDocs = await this.queryProductos.get()
            let docs = productosDocs.docs.map((doc) => ({
                id:doc.id,
                ...doc.data(),
                success:true
            }))
            if(docs){
                return{
                    success: true,
                    data: docs
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

    async getProductoId(id){
        try {
            const doc = this.queryProductos.doc(id)
            const res = await doc.get()
            if(res){
                return{
                    success: true,
                    data: res.data()
                }
            }else{
                return{
                    success: false,
                    data: 'No se pudo encontrar este producto'
                }
            }
        } catch (err) {
            return{
                success:false,
                message:err.message
            }
        }
    }

    async saveProducto(newProducto){
        try {
            const res = await this.queryProductos.add(newProducto)
            if(res){
                return{
                    success: true,
                    data: res
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

    async updateProductoId(id,updateProduct){
        try {
            const docProduct = this.queryProductos.doc(id)
            const res = await docProduct.update({
                timestam: updateProduct.timestam,
                nombre: updateProduct.nombre,
                descripción: updateProduct.descripción,
                código: updateProduct.código,
                imagen: updateProduct.imagen,
                precio: updateProduct.precio,
                stock: updateProduct.stock
            })
            if(res){
                return{
                    success: true,
                    data: res
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

    async deleteProductoId(id){
        try {
            const docProduct = this.queryProductos.doc(id)
            const res = await docProduct.delete()
            if(res){
                return{
                    success: true,
                    data: res
                }
            }else{
                return{
                    success: false,
                    data: 'No se pudo eliminar este producto'
                }
            }
        } catch (err) {
            return{
                success:false,
                message:err.message
            }
        }
    }
}

module.exports = ContenedorFirebase