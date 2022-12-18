const fetch = require('cross-fetch');
const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
    try {
        // fetch('https://fakestoreapi.com/products')
        //     .then(products => products.json())
        //     .then(jsonProducts => res.json(jsonProducts))
        const products = await Product.find({});
        res.json(products);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed load data from 'https://fakestoreapi.com/products'" });
    }
}

const getProductById = async (req, res) => {
    try {
        // fetch(`https://fakestoreapi.com/products/${req.params.id}`)
        //     .then(product => product.json())
        //     .then(jsonProduct => res.json(jsonProduct))
        const product = await Product.find({ id: req.params.id });
        res.json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed load data from 'https://fakestoreapi.com/products'" });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
};