import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//components
import CartItem from "../components/CartItem";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { useState } from "react";

const Cart = () => {

    const [shipTax, setShipTax] = useState(0);

    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart;
    console.log(cartItems);

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
        // return cartItems.reduce((item) => Number(item) + 1, 0);
        // return cartItems.length;
    };

    const getCartSubTotal = () => {
        return cartItems.reduce((price, item) => Number(item.price * item.qty) + price, 0);
    }

    const getShipPayment = () => {

        const countInCart = getCartCount();
        const tax = countInCart >= 4 ? countInCart + 5 : 0;
        return tax;
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
                    <CartItem key={item._id} item={item} qtyChangeHandler={qtyChangeHandler} removeFromCart={removeHandler} />
                ))}
            </div>
            <div className="cartscreen_right">
                <div className="cartscreen_info">
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                {<div className="cartscreen_shippayment">
                    Shipping price: <span>{getShipPayment() === 0 ? "Free shipping" : "$" + getShipPayment()}</span>
                </div>}
                <div>
                    <button>Proceed to checkout ${Number(getCartSubTotal().toFixed(2)) + Number(getShipPayment())}</button>
                </div>
            </div>
        </div>
    )
}

export default Cart