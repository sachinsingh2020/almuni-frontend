import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/actions/user';
import toast from 'react-hot-toast';

// ashish
const StudentLogin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const { message, error, loading } = useSelector(state => state.user);

    const hangleLogin = async (e) => {
        e.preventDefault();
        await dispatch(login(email, password));
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            hangleLogin(e);
        }
    };


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, message])


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 rounded-lg">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full h-full "
            >
                {/* Left Section */}
                <div className="bg-gradient-to-b from-blue-600 to-blue-800 w-full md:w-1/2  text-white flex flex-col justify-center items-center h-2/6 md:h-full"
                >
                    <h2 className="text-2xl md:text-4xl font-bold ">Alumni Connect</h2>
                    <p className="mt-2 md:mt-4 text-sm md:text-lg pl-2">
                        One stop platform to connect with alumni's
                    </p>
                    <button className="mt-4 w-30 md:w-36 ml-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                        Read More
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center items-center h-4/6 md:h-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
                        Hello Student!
                    </h2>
                    <p className="mt-2  text-gray-400 font-bold text-2xl">
                        Welcome Back
                    </p>

                    <form className="mt-4 md:mt-8 space-y-4 w-full flex flex-col items-center justify-center">
                        <div
                            className='w-full flex flex-col items-center justify-center'
                        >
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="mt-2 w-3/4 p-2 border border-gray-300 rounded-full pl-4 "
                                required
                                placeholder='Email address'
                            />
                        </div>

                        <div
                            className='w-full flex flex-col items-center justify-center'
                        >
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="mt-2 w-3/4 p-2 border border-gray-300 rounded-full pl-4"
                                required
                                onKeyPress={handleKeyPress}
                                placeholder='Password'
                            />
                        </div>



                        <button
                            onClick={hangleLogin}
                            type="submit"
                            className="w-3/4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2"
                        >
                            Student Login
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <Link to="/student-registration" >
                            <button className="text-blue-600 hover:underline" >
                                New User? Register
                            </button>
                        </Link>

                        <span className='text-gray-400'> / Forgot Password</span>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default StudentLogin;
