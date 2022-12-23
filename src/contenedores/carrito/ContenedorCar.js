const { identity } = require("lodash")

class ContenedorCar{
    constructor(mongoDB,Producto,Car){
        this.mongoDB = mongoDB
        this.Producto = Producto
        this.Car = Car
    }

    async createCar(){
        try {
            let date = new Date()
            let newCar = {
                timestamp: date,
                products: []
            }
            newCar = new this.Car({...newCar})
            await newCar.save()
            if(newCar){
                return{
                    success:true,
                    data: newCar
                }
            }else{
                return{
                    success: false,
                    data: 'No se pudo crear este carrito'
                }
            }
        } catch (err) {
            
        }
    }

    async addProductCar(idCar,idProduct){
        try {
            //const newProduct = new this.Producto({...newProducto})
            let car = false
            let product = false 
            let flag = false
            car = await this.Car.findOne({_id: idCar})
            product = await this.Producto.findOne({_id: idProduct})
           
            if(car && product){
                //console.log(car)
                car.products.push(product)
                flag = car.save()
            }
            
            if(flag){
                return{
                    success:true,
                    data: car
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

    async getProductsId(idCar){
        try {
            let data = false
            data = await this.Car.findOne({_id: idCar})
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

    async deleteProductIdCar(idCar,idProd){
        try {
            let dataCar = false
            let dataProduct = false
            let flag = false
            
            dataCar = await this.Car.findOne({_id: idCar})
            dataProduct = await this.Producto.findOne({_id: idProd})
            if(dataCar && dataProduct){
                let carProductAll = dataCar.products
                let products = []
                carProductAll.forEach(function(element){
                    if(element._id.toString() != dataProduct._id.toString()){
                        products.push(element)
                    }
                })
                dataCar.products = products
                flag = dataCar.save()
            }
            //console.log(res)
            if(flag){
                return{
                    success: true,
                    data: dataCar
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

module.exports = ContenedorCar