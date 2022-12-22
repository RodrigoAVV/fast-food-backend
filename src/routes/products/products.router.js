const express = require('express')
const {v4:uuidv4} = require('uuid')
const _= require('lodash')

const ProductoDaoArchivo = require('../../daos/productos/ProductoDaoArchivo')

const router = express.Router()

const productoDaoArchivo = new ProductoDaoArchivo()

router.get('/:id?',async (req,res,next) => {
    try {
        let data
        const {id} = req.params
        if(id){
            data = await productoDaoArchivo.getProduct(id)
            if(!data.success)(res.status(500).json(data))
            res.status(200).json(data)
        }else{
            data = await productoDaoArchivo.getProducts()
            if(!data.success)(res.status(500).json(data))
            res.status(200).json(data)
        }
    } catch (err) {
        next(err)
    }
})

router.post('/',async (req,res,next) => {
    try {
        const { body } = req
        if(_.isNil(body))(res.status(400).json({success:false,message:'REQ ERROR (Body missing)'}))
        Object.assign(body,{
            uuid:uuidv4(),
            timestamps:Date.now()
        })
        const data = await productoDaoArchivo.createProduct(body)
        if(!data.success)(res.status(500).json(data))
        res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

router.put('/:idd',async (req,res,next) => {
    try {
        const {idd} = req.params
        const {body} = req
        if(_.isNil(idd) || _.isNil(body))(res.status(400).json({success:false,message:'Req error'}))
        const data = await productoDaoArchivo.updateProduct(idd,body)
        if(!data.success)(res.status(500).json(data))
        res.status(200).send(idd)
    } catch (err) {
        next(err)
    }
})

router.delete('/:idd',async (req,res,next) => {
    try {
        const {idd} = req.params
        if(_.isNil(idd))(res.status(400).json({success:false,message:'Req error'}))
        const data = await productoDaoArchivo.deleteProduct(idd)
        if(!data.success)(res.status(500).json(data))
        res.status(200).send(idd)
    } catch (err) {
        next(err)
    }
})

module.exports = router