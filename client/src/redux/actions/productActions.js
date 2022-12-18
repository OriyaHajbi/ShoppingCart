import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST })

        const { data } = await axios.get("/api/products");

        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCES,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({
            type: actionTypes.GET_PRODUCT_DETAILS_SUCCES,
            payload: {
                category: data[0].category,
                description: data[0].description,
                id: data[0].id,
                image: data[0].image,
                price: data[0].price,
                title: data[0].title,
                countInStock: data[0].countInStock
            }
        })
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};

export const removeProductDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_PRODUCT_DETAILS_RESET
    });
};