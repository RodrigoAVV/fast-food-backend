const express = require('express')
const {v4:uuidv4} = require('uuid')
const _= require('lodash')

const dao = require('../../daos/index')
const { Router } = require('express')

const router = express.Router()

router.get('/',async (req,res,next) => {
    try {
        data = await dao().productos.getProducts()
        if(!data.success)(res.status(500).json(data))
        res.status(200).json(data)
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

router.delete('/:id',async (req,res,next) => {
    try {
        let idProduct = req.params.id
        let data = await dao().productos.deleteProductId(idProduct)
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