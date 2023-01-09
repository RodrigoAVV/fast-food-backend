const express = require('express')
//const {v4:uuidv4} = require('uuid')
const _= require('lodash')

const dao = require('../../daos/index')
const { Router } = require('express')

const router = express.Router()

router.get('/',async (req,res,next) => {
    try {
        const data = await dao().productos.getAllProductos()
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
        const id = req.params.id
        const data = await dao().productos.getProductoId(id)
        if(data.success){
            (res.status(200).json(data))
        }else{
            (res.status(400).json(data))
        }
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req,res,next) => {
    try {
        const newProducto = {
            timestamp: new Date().toDateString(),
            nombre: req.body.nombre,
            descripción: req.body.descripción,
            código: req.body.código,
            imagen: req.body.imagen,
            precio: req.body.precio,
            stock:req.body.stock
        }
        const data = await dao().productos.saveProducto(newProducto)
        if(data.success){
            (res.status(200).json(data))
        }else{
            (res.status(400).json(data))
        }
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req,res,next) => {
    try {
        const id = req.params.id
        const updateProduct = {
            timestam: new Date().toDateString(),
            nombre: req.body.nombre,
            descripción:req.body.descripción,
            código: req.body.código,
            imagen: req.body.imagen,
            precio: Number(req.body.precio),
            stock: Number(req.body.stock)
        }
        const data = await dao().productos.updateProductoId(id,updateProduct)
        if(data.success){
            (res.status(200).json(data))
        }else{
            (res.status(400).json(data))
        }
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req,res,next) => {
    try {
        const id = req.params.id
        const data = await dao().productos.deleteProductoId(id)
        if(data.success){
            (res.status(200).json(data))
        }else{
            (res.status(400).json(data))
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router