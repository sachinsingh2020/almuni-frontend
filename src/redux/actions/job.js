import { server } from '../store'
import axios from 'axios'

export const createAJob = (formData) => async (dispatch) => {
    try {
        dispatch({ type: 'createAJobRequest' });

        console.log({ formData });
        const { data } = await axios.post(`${server}/createjob`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        console.log({ data });
        dispatch({ type: 'createAJobSuccess', payload: data });
    }
    catch (error) {
        dispatch({ type: 'createAJobFail', payload: error.response.data.message });
    }
}

export const getAllJobs = (filters) => async (dispatch) => {
    try {
        dispatch({ type: 'getAllJobsRequest' });

        // Construct the query string based on the filters
        const params = new URLSearchParams();

        if (filters.keyword) {
            params.append('keyword', filters.keyword);
        }

        if (filters.location) {
            params.append('jobLocation', filters.location);
        }

        if (filters.skills && filters.skills.length > 0) {
            params.append('skills', filters.skills.join(','));
        }

        // Determine the URL based on whether any filters were applied
        const url = params.toString()
            ? `${server}/getalljobs?${params.toString()}`
            : `${server}/getalljobs`;

        // Make the API call
        console.log({ url });
        const { data } = await axios.get(url);

        dispatch({ type: 'getAllJobsSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'getAllJobsFail', payload: error.response?.data?.message || 'An error occurred' });
    }
};