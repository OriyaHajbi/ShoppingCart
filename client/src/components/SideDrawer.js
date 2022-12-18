import './SideDrawer.css'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

const SideDrawer = ({ show, click }) => {
    const sidedrawerClass = ["sidedrawer"];

    if (show) {
        sidedrawerClass.push("show");
    }

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.length;
    };

    return show && <div className={sidedrawerClass.join(" ")}>
        <ul className='sidedrawer_links' onClick={click}>
            <li>
                <Link to="/cart">
                    <i className='fas fa-shopping-cart'></i>
                    <span>
                        Cart<span className='sidedrawer_cartbadge'>{getCartCount()}</span>
                    </span>
                </Link>
            </li>
            <li>
                <Link to="/">
                    Shop
                </Link>
            </li>
        </ul>
    </div>

}

export default SideDrawer