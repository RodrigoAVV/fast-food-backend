const express = require('express')
const productosRouter = require('./products/products.router')


const routerMongoDB = require('./products/products.routerMongoDB')

const routerCar = require('./car/car.routerMongoDB')

const router = express.Router()

router.get('/health',(_req, res) => {
    res.status(200).json({
        success: true,
        helath: 'Up',
        envronment: process.env.ENVIRONMENT || 'NOT FOUND'
    })
})
//Se Cargan todas las rutas
.use('/api/productos',productosRouter)
.use('/api/mongo',routerMongoDB)
.use('/api/car',routerCar)

module.exports = router