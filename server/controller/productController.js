

const getAllProducts = async (req, res) => {
    try {
        const products = await fetch('https://fakestoreapi.com/products');

        console.log("In productController");
        console.log(products);

        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed load data from 'https://fakestoreapi.com/products'" });
    }
}

module.exports = getAllProducts;