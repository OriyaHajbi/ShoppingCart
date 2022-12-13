const express = require('express');
const router = express.Router();

const getAllProducts = require("../controller/productController")

//@desc   GET all the products
router.get('/', getAllProducts);


module.exports = router;