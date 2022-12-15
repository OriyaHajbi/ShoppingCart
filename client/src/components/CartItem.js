import "./CartItem.css"
import { Link } from "react-router-dom"
const CartItem = () => {
    return <div className="cartitem">
        <div className="cartitem_img">
            <img src="" alt="" />
        </div>

        <Link to={`/product/${111}`} className="cartitem_name">
            <p>Product 1</p>
        </Link>
        <p className="cartitem_price"> $99</p>

        <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>

        <button className="cartitem_deleteBtn">
            <i className="fas fa-trash"></i>
        </button>
    </div>

}

export default CartItem