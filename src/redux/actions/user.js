import { server } from '../store'
import axios from 'axios'

export const register = (formData) => async (dispatch) => {
    try {
        dispatch({ type: 'registerRequest' });

        const { data } = await axios.post(`${server}/register`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });

        console.log({ data });
        dispatch({ type: 'registerSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'registerFail', payload: error.response.data.message });
    }
}

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'loginRequest' });

        const { data } = await axios.post(`${server}/login`, { email, password }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });
        console.log({ data });
        dispatch({ type: 'loginSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'loginFail', payload: error.response.data.message });
    }
}


export const logout = () => async dispatch => {
    try {
        dispatch({ type: 'logoutRequest' });
        const { data } = await axios.get(`${server}/logout`, {
            withCredentials: true,
        });
        dispatch({ type: 'logoutSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'logoutFail', payload: error.response.data.message });
    }
};


export const isUserLoggedIn = () => async dispatch => {
    try {
        dispatch({ type: 'isLoggedInRequest' });
        const { data } = await axios.get(`${server}/isloggedin`, {
            withCredentials: true,
        });
        dispatch({ type: 'isLoggedInSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'isLoggedInFail', payload: error.response.data.message });
    }
}

export const movieRequest = (formData) => async (dispatch) => {
    try {
        dispatch({ type: 'movieRequestRequest' });

        const { data } = await axios.post(`${server}/contactus`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        })
        dispatch({ type: 'movieRequestSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'movieRequestFail', payload: error.response.data.message });
    }
}