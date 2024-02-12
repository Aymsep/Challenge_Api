const express = require('express')
const router = express.Router()

const {
    CreateProduct,
    SearchProducts,
    GetAllProducts
} = require('../Controllers/Products')


router.get('/',GetAllProducts)
router.get('/search',SearchProducts)
router.post('/',CreateProduct)



module.exports = router