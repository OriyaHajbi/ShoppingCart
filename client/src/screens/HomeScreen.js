import "./HomeScreen.css"

import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

//Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from '../redux/actions/productActions'


const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div className="homescreen">
            <h2 className="homescreen_title">Products</h2>
            <div className="homescreen_products">
                {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map((product) =>
                    <Product
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        category={product.category}
                        image={product.image}
                        rating={product.rating}
                    />)}
            </div>
        </div>
    )
}

export default HomeScreen