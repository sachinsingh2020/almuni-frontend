import React from 'react';
import MainPageImage from "../assets/MainPageImage.png";
import FrontPageBackgroundImage from "../assets/FrontPageBackgroundImage.jpg";
import { Link } from 'react-router-dom';

const FrontPage = () => {
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="w-3/5 relative flex justify-center items-center">
                <div className="absolute inset-0">
                    <img src={FrontPageBackgroundImage} alt="Graduation hats"
                        className="h-full w-full object-cover object-center " />
                </div>
                <div className="relative z-10 text-center">
                    <h1 className="text-6xl font-bold mb-2 text-black" style={{ textShadow: "4px 4px 0px white, -4px -4px 0px white, 4px -4px 0px white, -4px 4px 0px white" }}>
                        Alumni Connect
                    </h1>
                    <p className="text-3xl text-black" style={{ textShadow: "2px 2px 0px white, -2px -2px 0px white, 2px -2px 0px white, -2px 2px 0px white" }}>
                        One stop platform to connect with alumni's
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-2/5 bg-[#f8f6e1] flex flex-col justify-center items-center">
                <div
                    className='w-full flex flex-col items-center justify-center'
                >
                    <div className="justify-start w-1/2"
                    >
                        <h2 className="text-xl mb-2">Hello!</h2>
                        <h3 className="text-lg mb-2 text-gray-600">Welcome To</h3>
                        <h1 className="text-blue-600 text-4xl font-bold">Alumni Connect</h1>
                    </div>
                    <div className="mt-8 flex flex-col w-full items-center"
                    >
                        <Link
                            className='bg-blue-600 w-1/2 text-white  py-3 px-8 rounded-full text-lg mx-2 hover:bg-blue-700 mt-2 text-center'
                            to="/student-login">
                            <button >
                                Student
                            </button>
                        </Link>

                        <button className="bg-blue-600 w-1/2 text-white py-3 px-8 rounded-full text-lg mx-2 hover:bg-blue-700 mt-4">
                            Alumni
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FrontPage;
