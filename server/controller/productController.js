const fetch = require('cross-fetch');


const getAllProducts = (req, res) => {
    console.log("In getAllProducts function");

    try {
        fetch('https://fakestoreapi.com/products')
            .then(products => products.json())
            .then(jsonProducts => res.json(jsonProducts))

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed load data from 'https://fakestoreapi.com/products'" });
    }
}

const getProductById = (req, res) => {
    console.log("In getProductById function @@@");
    try {
        fetch(`https://fakestoreapi.com/products/${req.params.id}`)
            .then(product => product.json())
            .then(jsonProduct => res.json(jsonProduct))

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed load data from 'https://fakestoreapi.com/products'" });
    }
}

module.exports = {
    getAllProducts,
    getProductById,
};