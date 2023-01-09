const express = require('express')
const {v4:uuidv4} = require('uuid')
const _= require('lodash')

const dao = require('../../daos/index')
const { Router } = require('express')

const router = express.Router()

router.get('/:id',async (req,res,next) => {
   

})

module.exports = router