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

export const server = "https://alumni-backend-gray.vercel.app/api/v1"
// export const server = "http://localhost:4000/api/v1"

// dfaskjhjkhk
// sdkjd