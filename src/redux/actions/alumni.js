import { server } from '../store'
import axios from 'axios'

export const alumniRegister = (formData) => async (dispatch) => {
    try {
        dispatch({ type: 'alumniRegisterRequest' });

        console.log({ formData });

        const { data } = await axios.post(`${server}/alumniregister`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true,
        });

        console.log({ data });
        dispatch({ type: 'alumniRegisterSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'alumniRegisterFail', payload: error.response.data.message });
    }
}

export const alumniLogin = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'alumniLoginRequest' });

        const { data } = await axios.post(`${server}/alumnilogin`, { email, password }, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        console.log({ data });
        localStorage.setItem('isAlumniAuthenticated', true);
        dispatch({ type: 'alumniLoginSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'alumniLoginFail', payload: error.response.data.message });
    }
}

export const alumniLogout = () => async dispatch => {
    try {
        dispatch({ type: 'alumniLogoutRequest' });
        const { data } = await axios.get(`${server}/alumnilogout`, {
            withCredentials: true,
        });

        dispatch({ type: 'alumniLogoutSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'alumniLogoutFail', payload: error.response.data.message });
    }
}

export const loadAlumniDetails = () => async (dispatch) => {
    try {
        dispatch({ type: 'loadAlumniDetailsRequest' });
        console.log(' in the load alumni request');
        const { data } = await axios.get(`${server}/loadalumnidetails`, {
            withCredentials: true,
        });

        console.log({ data });
        dispatch({ type: 'loadAlumniDetailsSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'loadAlumniDetailsFail', payload: error.response.data.message });
    }
}

export const getAllAlumnis = (keyword = "", currentPage = 1, graduationYear = "", industry = "", fieldOfStudy = "") => async (dispatch) => {
    try {
        dispatch({ type: 'getAllAlumnisRequest' });

        // Construct the query parameters based on provided filters
        let link = `${server}/alumni?keyword=${keyword}&page=${currentPage}`;

        if (graduationYear) {
            link += `&graduationYear=${graduationYear}`;
        }

        if (industry) {
            link += `&industry=${industry}`;
        }

        if (fieldOfStudy) {
            link += `&fieldOfStudy=${fieldOfStudy}`;
        }

        console.log({ link });

        const { data } = await axios.get(link);

        console.log({ data });
        dispatch({ type: 'getAllAlumnisSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getAllAlumnisFail', payload: error.response.data.message });
    }
}



export const getAlumniDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: 'getAlumniDetailsRequest' });

        const { data } = await axios.get(`${server}/getalumnidetail/${id}`);

        console.log({ data });
        dispatch({ type: 'getAlumniDetailsSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'getAlumniDetailsFail', payload: error.response.data.message });
    }
}