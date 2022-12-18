const mongoose = require('mongoose');
const fetch = require('cross-fetch');

const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const loadProducts = () => {

    try {
        fetch('https://fakestoreapi.com/products')
            .then(products => products.json())
            .then(jsonProducts => {
                Product.find({}, async function (err, foundProducts) {
                    if (foundProducts.length === 0) {
                        jsonProducts.forEach(product => {
                            product.countInStock = Math.floor(Math.random() * 10);
                        });
                        console.log(jsonProducts);
                        await Product.insertMany(jsonProducts)
                    }
                })
            })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed load data from 'https://fakestoreapi.com/products'" });
    }
}

loadProducts();