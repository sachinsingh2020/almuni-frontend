import { server } from '../store'
import axios from 'axios'


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