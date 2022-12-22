const fs = require('fs')

class CarService{
    constructor(){}

    async createCar(data){
        try {
            //const car = await fs.promises.readFile(__dirname + '/car.json')
            //const carObject = JSON.parse(car)
            //carObject.productos.push(data)
            //carObject.push(data)
            await fs.promises.writeFile(__dirname + '/car.json',JSON.stringify(data,null,2))
            const car = await fs.promises.readFile(__dirname + '/car.json')
            const carObject = JSON.parse(car)
            return{
                success:true
            }
        } catch (err) {
            console.error(err)
            return{
                success:false,
                message:err.message
            }
        }
    }

    async deleteCar(idd){
        try {
            const car = await fs.promises.readFile(__dirname + '/car.json')
            const carObject = JSON.parse(car)
            //const newCar = carObject.filter(i => i.uuid != uuid)
            if(carObject){
                await fs.promises.writeFile(__dirname + '/car.json',JSON.stringify(null,null,2))
            }
            
            return{
                success:true
            }
        } catch (err) {
            console.error(err)
            return{
                success:false,
                message:err.message
            }
        }
        
    }

    async deleteCarProd(id,id_prod){
        try {
            const car = await fs.promises.readFile(__dirname + '/car.json')
            const carObject = JSON.parse(car)
            const carProducts = carObject.productos
            const newCar = carProducts.filter(i => i.uuid != uuid)
            await fs.promises.writeFile(__dirname + '/car.json',JSON.stringify(newCar,null,2))
            return{
                success:true,
                data:`Product ${id_prod} deleted successFull`
            }
        } catch (err) {
            console.error(err)
            return{
                success:false,
                message:err.message
            }
        }
    }

    async getCar(id){
        try {
            const car = await fs.promises.readFile(__dirname + '/car.json')
            const carObject = JSON.parse(car)
            return{
                success:true,
                data:carObject.productos
            }
        } catch (err) {
            console.error(err)
            return{
                success:false,
                message:err.message
            }
        }
    }

    async createProdCar(data){
        try {
            const car = await fs.promises.readFile(__dirname + '/car.json')
            const carObject = JSON.parse(car)
            carObject.productos.push(data)
            await fs.promises.writeFile(__dirname + '/car.json',JSON.stringify(carObject,null,2))
            return{
                success:true
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

module.exports = CarService