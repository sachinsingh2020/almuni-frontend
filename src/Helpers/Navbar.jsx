import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const { isAlumniAuthenticated } = useSelector(state => state.alumni);
    const { isAuthenticated } = useSelector(state => state.user);

    const navigate = useNavigate();

    const handleHomeClick = () => {
        if (isAuthenticated) {
            navigate('/student-home');
        } else if (isAlumniAuthenticated) {
            navigate('/alumni-home');
        }
    }
    return (
        <header className="mb-4 py-6 mx-12">
            <div className="max-w-8xl mx-auto py-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Alumni Connect</h1>
                <nav className="space-x-12">
                    <button
                        onClick={handleHomeClick}
                        className="text-gray-900 font-semibold"
                    >
                        Home
                    </button>
                    <Link to='/job-portal' className="text-gray-900 font-semibold">
                        Job Portal
                    </Link>
                    <a href="#" className="text-gray-900 font-semibold">Profile</a>
                    <button className="bg-gradient-to-tr from-blue-700 to-blue-900 text-white px-4 py-1 rounded">Logout</button>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
