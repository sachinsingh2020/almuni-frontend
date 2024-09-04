import React, { useEffect } from 'react';
import AlumniSampleImage1 from "../../assets/AlumniSampleImage1.png";
import AlumniSampleImage2 from "../../assets/AlumniSampleImage2.png";
import AlumniSampleImage3 from "../../assets/AlumniSampleImage3.png";
import AlumniSampleImage4 from "../../assets/AlumniSampleImage4.png";
import AlumniSampleImage5 from "../../assets/AlumniSampleImage5.png";
import AlumniSampleImage6 from "../../assets/AlumniSampleImage6.png";
import Circle1 from "../../assets/circle1.png"
import Circle2 from "../../assets/circle2.png";
import Circle3 from "../../assets/circle3.png";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/user';
import toast from 'react-hot-toast';
import TestimonialCard from '../../Helpers/TestimonialCard';
import { testimonials } from '../../Helpers/sampleTestimonialData';
import { AllEvents } from '../../Helpers/allEvents';
import EventCard from '../../Helpers/EventCard';
import { IoMailSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LiaFacebookSquare } from "react-icons/lia";
import { Link, useNavigate } from 'react-router-dom';

// ashish 


const StudentHomePage = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
    }

    const goToProfile = () => {
        navigate('/student-profile');
    }

    const handleSeachForAlumniButton = () => {
        navigate('/alumni-search');
    }

    const { error, message } = useSelector(state => state.user);


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
        <div className="min-h-screen w-full">
            <div
                className='bg-gradient-to-r from-blue-500 to-blue-700 text-white'
            >
                <nav className="flex justify-between items-center px-8 py-4 h-[4rem]">
                    <div className="text-2xl font-bold">Alumni Connect</div>
                    <div className="space-x-[10rem]">
                        {/* <button className="hover:text-gray-200 text-lg">Donate</button> */}
                        <Link to="/student-home" className="hover:text-gray-200 text-lg" >
                            Home
                        </Link>

                        <Link to="/alumni-search" className="hover:text-gray-200 text-lg" >
                            Find Alumni
                        </Link>
                        <Link to="/job-portal" >
                            Job Portal
                        </Link>
                        <button
                            onClick={goToProfile}
                            className="hover:text-gray-200 text-lg">Profile</button>
                    </div>
                    <button
                        onClick={logoutHandler}
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
                            <div className="space-x-16">
                                <button
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-2xl px-8 py-3 "
                                    style={{
                                        borderTopLeftRadius: '20px',
                                        borderTopRightRadius: '0px',
                                        borderBottomRightRadius: '20px',
                                        borderBottomLeftRadius: '0px',
                                    }}
                                >Start Now</button>
                                <button className="bg-[#679cdf] hover:bg-gray-300 text-white font-semibold text-2xl px-8 py-3 rounded-full"
                                    style={{
                                        borderTopLeftRadius: '00px',
                                        borderTopRightRadius: '20px',
                                        borderBottomRightRadius: '00px',
                                        borderBottomLeftRadius: '20px',
                                    }}
                                >See Job Vacancy</button>
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


            {/* search Alumni Button  */}
            <div className="flex justify-center items-center  bg-black py-8">
                <button
                    onClick={handleSeachForAlumniButton}
                    className="bg-blue-600 text-white font-bold px-8 py-4  hover:bg-blue-700 text-5xl"
                    style={{
                        borderTopLeftRadius: '00px',
                        borderTopRightRadius: '20px',
                        borderBottomRightRadius: '00px',
                        borderBottomLeftRadius: '20px',
                    }}
                >
                    Search for Alumni
                </button>
            </div>

            <div className="my-12">
                <div
                    className='text-center text-xl font-semibold text-[#FF7A00]'
                >TESTIMONIALS</div>
                <h2 className="text-center text-2xl font-bold mb-8">What our Alumni say about us.</h2>
                <div className="flex justify-center space-x-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            image={testimonial.image}
                            rating={testimonial.rating}
                            text={testimonial.text}
                        />
                    ))}
                </div>
            </div>

            {/* Event Section  */}
            <div className="py-4 px-8 flex flex-col justify-center items-center">
                <div className="text-center text-3xl font-bold mb-8">
                    All Events
                </div>
                <div className="w-full h-[70vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {AllEvents.map((event, index) => (
                            <EventCard
                                key={index}
                                title={event.title}
                                postDate={event.postDate}
                                description={event.description}
                                donation={event.donation}
                            />
                        ))}
                    </div>
                </div>

            </div>

            <div className="mx-auto">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12">
                    <h1 className="text-3xl font-bold text-center">Newsletter</h1>
                    <p className="text-center mt-4">In urna bibendum ultricies non ultricies adipiscing lobortis cursus dolor.</p>
                    <div className="flex flex-col justify-center items-center mt-6">
                        <input
                            type="email"
                            className="w-1/4 bg-transparent border-b-2 border-[#eff1f3] text-[#eff1f3] placeholder-[#eff1f3] px-4 py-2 focus:outline-none"
                            placeholder="Enter Your Email"
                        />
                        <button className="w-1/4 bg-transparent text-white border-2 border-white px-4 py-2 mt-6 hover:bg-white hover:text-blue-500 rounded-full ">SUBSCRIBE →</button>
                    </div>
                </div>



                {/* Footer Section */}
                <div className="bg-gray-100 py-8">
                    <div className="flex justify-between px-16">
                        <div
                            className='flex flex-col font-semibold justify-evenly py-4'
                        >
                            <div
                                className='flex items-center text-lg'
                            >
                                <IoMailSharp className="text-black-500 " />
                                <p className="ml-2 ">www.gbu.ac.in</p>
                            </div>
                            <div
                                className='flex items-center text-lg'
                            >
                                <FaPhone className="text-black-500 " />
                                <p className="ml-2 ">+977-01-4436544</p>
                            </div>
                            <div
                                className='flex items-center text-lg'
                            >
                                <FaLocationDot className="text-black-500 " />
                                <p className="ml-2 ">Yamuna Expressway, Greater Noida, 201312</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Our Service</h3>
                            <ul className="mt-2">
                                <li>CONNECT WITH CLASSMATE</li>
                                <li>CONNECT WITH ALUMNI</li>
                                <li>LOREM</li>
                                <li>IPSUM</li>
                                <li>ENT</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Take a tour</h3>
                            <ul className="mt-2">
                                <li>HOME</li>
                                <li>PRODUCTS</li>
                                <li>ABOUT US</li>
                                <li>EVENTS</li>
                                <li>CONTACT US</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4">Enquire →</button>
                            <div className="flex mt-4">
                                <FaInstagram className="text-blue-500 hover:text-blue-700 text-3xl mx-1" />
                                <FaTwitter className="text-blue-500 hover:text-blue-700 text-3xl mx-1" />
                                <LiaFacebookSquare className="text-blue-500 hover:text-blue-700 text-3xl mx-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    );
};

export default StudentHomePage;
