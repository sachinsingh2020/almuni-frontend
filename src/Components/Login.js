import React, { useState } from 'react';

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);

    const toggleAuthMode = () => {
        setIsRegister(!isRegister);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
                {/* Left Section */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-full md:w-1/2 p-8 text-white flex flex-col justify-center">
                    <h2 className="text-4xl font-bold">Alumni Connect</h2>
                    <p className="mt-4 text-lg">
                        One stop platform to connect with alumni's
                    </p>
                    <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Read More
                    </button>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-700">
                        {isRegister ? 'Hello New User!' : 'Hello Student!'}
                    </h2>
                    <p className="mt-2 text-gray-500">
                        {isRegister ? 'Sign up to get started' : 'Welcome Back'}
                    </p>

                    <form className="mt-8 space-y-4">
                        <div>
                            <label className="block text-gray-700">Email Address</label>
                            <input
                                type="email"
                                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
                                required
                            />
                        </div>

                        {isRegister && (
                            <div>
                                <label className="block text-gray-700">Confirm Password</label>
                                <input
                                    type="password"
                                    className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                        >
                            {isRegister ? 'Register' : 'Login'}
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <button className="text-blue-600 hover:underline" onClick={toggleAuthMode}>
                            {isRegister ? 'Already have an account? Login' : 'New User? Register'}
                        </button>
                    </div>

                    {!isRegister && (
                        <div className="mt-6 flex justify-center space-x-4">
                            <button className="flex items-center justify-center p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                                <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" className="w-6 h-6" />
                            </button>
                            <button className="flex items-center justify-center p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                                <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" className="w-6 h-6" />
                            </button>
                            <button className="flex items-center justify-center p-2 bg-gray-200 rounded-full hover:bg-gray-300">
                                <img src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" alt="Apple" className="w-6 h-6" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
