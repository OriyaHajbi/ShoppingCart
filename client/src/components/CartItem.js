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

        <select className="cartitem_select" onChange={(e) => qtyChangeHandler(item.id, e.target.value)} value={item.qty}>
            {[...Array(item.countInStock).keys()].map((x) =>
                <option key={x + 1} value={x + 1}>{x + 1}</option>)}
        </select>

        <button className="cartitem_deleteBtn" onClick={() => removeFromCart(item.id)}>
            <i className="fas fa-trash"></i>
        </button>
    </div>

}

export default CartItem