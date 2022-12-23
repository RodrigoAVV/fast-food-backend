const express = require('express')
const {v4:uuidv4} = require('uuid')
const _= require('lodash')

const dao = require('../../daos/index')
const { Router } = require('express')

const router = express.Router()

router.post('/',async (req,res,next) => {
    try {
        data = await dao().car.createCar()
        if(data.success){
            (res.status(200).json(data))
        }else{
            (res.status(400).json(data))
        }
    } catch (err) {
        return res.status(404).json({
            error: `Error al crear el carrito ${err}`
        });
    }
})

router.post('/:idCar/:idProduct',async (req,res,next) => {
    try {
        const idCar = req.params.idCar
        const idProduct = req.params.idProduct
        data = await dao().car.addProductCar(idCar,idProduct)
        if(data.success){
            (res.status(200).json(data))
        }else{
            (res.status(400).json(data))
        }
    } catch (err) {
        return res.status(404).json({
            error: `Error al crear el carrito ${err}`
        });
    }
})

router.get('/:idCar/productos',async (req,res,next) => {
    try {
        const idCar = req.params.idCar
        const data = await dao().car.getProductsId(idCar)
        //console.log(dao)
        if(data.success){
            (res.status(200).json(data))
        }else{
            (res.status(400).json(data))
        }
    } catch (err) {
        next(err)
    }

})

router.get('/:id',async (req,res,next) => {
    try {
        let uuid = req.params.id
        //console.log(uuid)
        let data = await dao().productos.getProductId(uuid)
        if(data.success){
            (res.status(200).json(data))
        }else{
            (res.status(400).json(data))
        }
    } catch (err) {
        next(err)
    }

})

router.post('/',async (req,res,next) => {
    try {
        //console.log('post')
        const {nombre,descripcion,codigo,imagen,precio,stock} = req.body

        const newProducto = {
            nombre: nombre,
            descripcion: descripcion,
            codigo: Number(codigo),
            imagen: imagen,
            precio: Number(precio),
            stock: Number(stock),
            fecha: new Date().toDateString()
        }
        //console.log(newProducto)
        const data =  await dao().productos.saveProduct(newProducto)
        if(data.success){
            (res.status(200).json(data))
        }else{
            (res.status(400).json(data))
        }
    } catch (err) {
        next(err)
    }
})

router.delete('/:idCar/productos/:idProd',async (req,res,next) => {
    try {
        let idCar = req.params.idCar
        let idProd = req.params.idProd
        //.log(dao().productos)
        let data = await dao().car.deleteProductIdCar(idCar,idProd)
        if(data.success){
            (res.status(200).json(data))
        }else{
            (res.status(400).json(data))
        }
    } catch (err) {
        next(err)
    }
})

router.put('/:id',async (req,res,next) => {
    try {
        let idProduct = req.params.id

        const fecha = new Date().toDateString()

        const {nombre,descripcion,codigo,imagen,precio,stock} = req.body

        const updateProducto = {
            nombre: nombre,
            descripcion: descripcion,
            codigo: Number(codigo),
            imagen: imagen,
            precio: Number(precio),
            stock: Number(stock),
            fecha: fecha
        }
        let data = await dao().productos.updateProductId(idProduct,updateProducto)
        if(data.success){
            (res.status(200).json(data))
        }else{
            (res.status(400).json(data))
        }
    } catch (error) {
        next(err)
    }
})

module.exports = router