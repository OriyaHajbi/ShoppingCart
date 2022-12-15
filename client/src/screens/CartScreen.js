import "./CartScreen.css";

//components
import CartItem from "../components/CartItem";

const Cart = () => {
    return (
        <div className="cartscreen">
            <div className="cartscreen_left">
                <h2>Shopping Cart</h2>
                <CartItem />
            </div>
            <div className="cartscreen_right">
                <div className="cartscreen_info">
                    <p>Subtotal (0) items</p>
                    <p>$99</p>
                </div>
                <div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart