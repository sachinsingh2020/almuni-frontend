import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../redux/actions/user';
import toast from 'react-hot-toast';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const { message, error, loading } = useSelector(state => state.user);

    const hangleLogin = async (e) => {
        e.preventDefault();
        await dispatch(login(email, password));
    }

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
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
                {/* Left Section */}
                <div className="bg-gradient-to-b from-blue-600 to-blue-800 w-full md:w-1/2 p-8 text-white flex flex-col justify-center">
                    <h2 className="text-4xl font-bold pr-16">Alumni Connect</h2>
                    <p className="mt-4 text-lg pl-2">
                        One stop platform to connect with alumni's
                    </p>
                    <button className="mt-4 w-36 ml-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                        Read More
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-700">
                        'Hello Student!'
                    </h2>
                    <p className="mt-2 text-gray-500">
                        Welcome Back
                    </p>

                    <form className="mt-8 space-y-4">
                        <div>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="mt-2 w-full p-2 border border-gray-300 rounded-full pl-4"
                                required
                                placeholder='Email address'
                            />
                        </div>

                        <div>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="mt-2 w-full p-2 border border-gray-300 rounded-full pl-4"
                                required
                                placeholder='Password'
                            />
                        </div>



                        <button
                            onClick={hangleLogin}
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                        >
                            Login
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <Link to="/registration" >
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

export default Login;
