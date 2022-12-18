import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

export const addToCart = (id, qty) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    console.log(data[0]);
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: data[0].id,
            title: data[0].title,
            image: data[0].image,
            price: data[0].price,
            category: data[0].category,
            description: data[0].description,
            countInStock: data[0].countInStock,
            qty

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