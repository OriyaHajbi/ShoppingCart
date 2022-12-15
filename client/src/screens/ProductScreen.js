import "./ProductScreen.css"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';


//Actions 
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";


const ProductScreen = ({ history, match }) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const { id } = useParams();
    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;
    useEffect(() => {

        if (product && id !== product.id) {
            dispatch(getProductDetails(id));
            console.log(id);
            console.log("product is " + product);
        }
    }, []);

    return <div className="productscreen">
        {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
            <>

                <div className="productscreen_left">
                    <div className="left_img">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="left_info">
                        <p className="left_name">{product.title} </p>
                        <p >Price: ${product.price} </p>
                        <p >Description : {product.description} </p>
                    </div>
                </div>
                <div className="productscreen_right">
                    <div className="right_info">
                        <p>
                            Price: <span>${product.price}</span>
                        </p>
                        <p>
                            Status: <span>In Stock</span>
                        </p>
                        <p>
                            Qty
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </p>
                        <p>
                            <button type="button">Add to Cart</button>
                        </p>
                    </div>
                </div>
            </>
        )}
    </div>

}

export default ProductScreen