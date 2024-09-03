import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { alumniLogout } from '../redux/actions/alumni';
import toast from 'react-hot-toast';

const AlumniNavbar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(alumniLogout());
    }

    const { alumniError, message } = useSelector(state => state.alumni);


    useEffect(() => {
        if (alumniError) {
            toast.error(alumniError);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, alumniError, message])


    return (
        <header className="mb-4 py-6 mx-12">
            <div className="max-w-8xl mx-auto py-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Alumni Connect</h1>
                <nav className="space-x-12">
                    <Link to="/alumni-home" className="text-gray-900 font-semibold">
                        Home
                    </Link>
                    <Link to="/job-portal" className="text-gray-900 font-semibold">
                        Job Portal
                    </Link>
                    <Link to="/job-post" className="text-gray-900 font-semibold">
                        Job Post
                    </Link>
                    <Link to="/my-alumni-profile" className="text-gray-900 font-semibold">
                        Profile
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="bg-gradient-to-tr from-blue-700 to-blue-900 text-white px-4 py-1 rounded">Logout</button>
                </nav>
            </div>
        </header >
    )
}

export default AlumniNavbar
