import "./Product.css"
import { Link } from "react-router-dom"
const Product = (props) => {
    return (
        <div className="product">
            <img src={props.image} alt={props.title} />
            <div className="product_info">
                <p className="info_name">{props.title} </p>
                <p className="info_description">{props.description.substring(0, 100)}...</p>
                <p className="info_price">${props.price}</p>

                <Link to={`/product/${props.id}`} className="info_button">
                    View
                </Link>
            </div>
        </div>
    )
}

export default Product