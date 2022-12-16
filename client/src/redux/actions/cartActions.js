import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: data.id,
            title: data.title,
            image: data.image,
            price: data.price,
            category: data.category,
            description: data.description,

        }
    })
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}