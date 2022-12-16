import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//components
import CartItem from "../components/CartItem";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const Cart = () => {

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart;


    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id));
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        // return cartItems.reduce((qty , item) => item.qty + qty, 0);
        // return cartItems.reduce((item) => Number(item) + 1, 0);
        return cartItems.length;
    };

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => item.price + price, 0);
    }

    return (
        <div className="cartscreen">
            <div className="cartscreen_left">
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your cart is empty <Link to="/">Go back</Link>
                    </div>
                ) : cartItems.map(item => (
                    <CartItem key={item.id} item={item} qtyChangeHandler={qtyChangeHandler} removeFromCart={removeHandler} />
                ))}
            </div>
            <div className="cartscreen_right">
                <div className="cartscreen_info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed to checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart