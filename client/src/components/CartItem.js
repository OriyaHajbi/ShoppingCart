import "./CartItem.css"
import { Link } from "react-router-dom"

const CartItem = ({ item, qtyChangeHandler, removeFromCart }) => {
    return <div className="cartitem">
        <div className="cartitem_img">
            <img src={item.image} alt={item.title} />
        </div>

        <Link to={`/product/${item.id}`} className="cartitem_name">
            <p>{item.title}</p>
        </Link>
        <p className="cartitem_price"> ${item.price}</p>

        {/* <select className="cartitem_select" >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select> */}

        <button className="cartitem_deleteBtn" onClick={() => removeFromCart(item.id)}>
            <i className="fas fa-trash"></i>
        </button>
    </div>

}

export default CartItem