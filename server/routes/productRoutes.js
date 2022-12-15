const express = require('express');
const router = express.Router();

const { getAllProducts, getProductById } = require("../controller/productController")

//@desc   GET all the products
router.get('/', getAllProducts);

//@desc   GET product by ID
router.get('/:id', getProductById);


module.exports = router;