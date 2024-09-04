import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import { alumniReducer } from './reducers/almuniReducer';
import { jobReducer } from './reducers/jobReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        alumni: alumniReducer,
        job: jobReducer,
    }
})

export default store

export const server = process.env.REACT_APP_SERVER_URL;
