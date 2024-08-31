import React from 'react';
import AlumniSampleImage1 from "../assets/AlumniSampleImage1.png";
import AlumniSampleImage2 from "../assets/AlumniSampleImage2.png";
import AlumniSampleImage3 from "../assets/AlumniSampleImage3.png";
import AlumniSampleImage4 from "../assets/AlumniSampleImage4.png";
import AlumniSampleImage5 from "../assets/AlumniSampleImage5.png";
import AlumniSampleImage6 from "../assets/AlumniSampleImage6.png";
import Circle1 from "../assets/circle1.png";
import Circle2 from "../assets/circle2.png";
import Circle3 from "../assets/circle3.png";

const StudentHomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white">
            <nav className="flex justify-between items-center px-8 py-4 h-[4rem]">
                <div className="text-2xl font-bold">Alumni Connect</div>
                <div className="space-x-[10rem]">
                    <button className="hover:text-gray-200 text-lg">Donate</button>
                    <button className="hover:text-gray-200 text-lg">Job Portal</button>
                    <button className="hover:text-gray-200 text-lg">Profile</button>
                </div>
                <button
                    className="bg-yellow-400 text-black px-4 py-2 font-semibold"
                    style={{
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '30px',
                        borderBottomRightRadius: '0',
                        borderBottomLeftRadius: '20px',
                    }}
                >
                    Logout
                </button>

            </nav>

            <div
                className='flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white'
                style={{
                    fontFamily: "Poppins, sans-serif",
                }}
            >
                <div
                    className="flex flex-col items-center justify-center min-h-screen w-[50%] px-8"
                >
                    <div className="w-full text-center">
                        <h1 className="text-3xl font-bold mb-4">Your High Time to Connect with Alumni</h1>
                        <p className="text-lg mb-8">Lorem Ipsum we can write whatever we want we can add little description so that we can build trust hahahha</p>
                        <div className="space-x-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl px-6 py-3 rounded-full">Start Now</button>
                            <button className="bg-[#679cdf] hover:bg-gray-300 text-white font-bold text-xl   px-6 py-3 rounded-full">See Job Vacancy</button>
                        </div>
                    </div>
                </div>



                <div className="relative flex flex-col items-center justify-center min-h-screen w-1/2 h-full">
                    <div className='w-[8%] absolute top-[5%] left-[26%]'>
                        <img src={Circle1} alt="Circle1" className='w-full h-full object-contain' />
                    </div>
                    <div className='w-[8%] absolute top-[60%] left-[-5%]'>
                        <img src={Circle2} alt="Circle1" className='w-full h-full object-contain' />
                    </div>
                    <div className='w-[8%] absolute top-[60%] right-[-2%]'>
                        <img src={Circle3} alt="Circle1" className='w-full h-full object-contain' />
                    </div>
                    <div className="w-[30%] h-[50%] absolute top-[12%] left-[0%]">
                        <img src={AlumniSampleImage1} alt="Alumni 1" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-[30%] h-[48%] absolute top-[0%] left-[35%]">
                        <img src={AlumniSampleImage2} alt="Alumni 2" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-[30%] h-[50%] absolute top-[12%] right-0">
                        <img src={AlumniSampleImage3} alt="Alumni 3" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-[30%] h-[35%] absolute bottom-[0%] left-[0%]">
                        <img src={AlumniSampleImage4} alt="Alumni 4" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-[30%] h-[48%] absolute bottom-[0%] left-[35%]">
                        <img src={AlumniSampleImage5} alt="Alumni 5" className="w-full h-full object-contain" />
                    </div>
                    <div className="w-[30%] h-[35%] absolute bottom-[0%] right-[0%]">
                        <img src={AlumniSampleImage6} alt="Alumni 6" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>




        </div>
    );
};

export default StudentHomePage;
