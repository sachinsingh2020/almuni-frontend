import React, { useEffect } from 'react';
import { FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import testimonialPic1 from "../../assets/testimonialPic1.png";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiSolidSchool } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import AlumniNavbar from '../../Helpers/AlumniNavbar';

const AlumniMyProfile = () => {

    const { alumniUser } = useSelector(state => state.alumni);

    useEffect(() => {
        console.log({ alumniUser });
    }, [alumniUser])


    return (
        !alumniUser ? <div>Loading...</div> :
            <div>
                <div>
                    <AlumniNavbar />
                </div>
                <div className="bg-white min-h-screen flex flex-col">
                    <main>
                        <div className="max-w-7xl mx-auto px-4 py-8">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-900 rounded-lg shadow-xl overflow-hidden">
                                <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
                                    <div className="text-white mb-6 md:mb-0 md:w-2/3">
                                        <h3 className="text-4xl font-bold mb-4"> {alumniUser.firstName} {alumniUser.lastName}, {alumniUser.profession}</h3>
                                        <p className="mb-4 text-sm">Currently Working in {alumniUser.industry} at {alumniUser.jobLocation}.</p>
                                        <div className="flex space-x-4 mb-4">
                                            <a href={alumniUser.socialMedia?.twitter}>
                                                <FaXTwitter className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
                                            </a>
                                            <a href={alumniUser.socialMedia?.linkedin}>
                                                <FaLinkedinIn className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
                                            </a>
                                            <a href={alumniUser.socialMedia?.instagram}>
                                                <FaInstagram className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
                                            </a>
                                            <a href={alumniUser.socialMedia?.github}>
                                                <FaGithub className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0 md:w-1/3 flex flex-col items-center">
                                        <img src={alumniUser.profilePic.url} alt="profile img" className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg mb-4" />
                                        <div className="bg-white text-gray-800 rounded-lg p-3 flex items-center space-x-2 shadow-md">
                                            {/* <IoMdSparkles className="w-5 h-5 text-yellow-500" /> */}
                                            <span className="text-sm font-medium">Working in {alumniUser.industry}</span>
                                        </div>
                                        <Link to="/job-post">
                                            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition duration-300">Post a Job</button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-white p-4 flex justify-around">
                                    <div className="text-center">
                                        <FaGraduationCap className="w-10 h-10 cursor-pointer mx-auto" />
                                        <p className="mt-2 text-xs font-medium text-gray-600">GRADUATED AT {alumniUser.graduationYear}</p>
                                    </div>
                                    <div className="text-center">
                                        <BiSolidSchool className="w-10 h-10 cursor-pointer mx-auto" />
                                        <p className="mt-2 text-xs font-medium text-gray-600">{alumniUser.fieldOfStudy}</p>
                                    </div>
                                    <div className="text-center">
                                        <FaDonate className="w-10 h-10 cursor-pointer mx-auto" />
                                        <p className="mt-2 text-xs font-medium text-gray-600">Donated Amount: {alumniUser.donation} INR</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3
                                    style={{
                                        borderBottom: '5px solid black',
                                    }}
                                    className="text-2xl font-bold text-gray-800  text-center mt-12 mb-4">ABOUT</h3>
                                <li
                                    className='text-gray-600 text-lg font-semibold'
                                >
                                    {alumniUser.firstName} {alumniUser.lastName} completed his graduation in {alumniUser.fieldOfStudy} from Gautam Buddha University in the year {alumniUser.graduationYear}.
                                </li>
                                <li
                                    className='text-gray-600 text-lg font-semibold'
                                >
                                    He is now working in {alumniUser.industry} as a {alumniUser.profession}.
                                </li>
                                <li
                                    className='text-gray-600 text-lg font-semibold'
                                >
                                    {alumniUser.firstName} is currently living in {alumniUser.jobLocation}.
                                </li>
                                <li
                                    className='text-gray-600 text-lg font-semibold'
                                >
                                    To know more about {alumniUser.firstName}, you can connect with him on his social media handles.
                                </li>
                                <li
                                    className='text-gray-600 text-lg font-semibold'
                                >
                                    Email him at {alumniUser.email}.
                                </li>
                            </div>
                        </div>
                    </main >

                    <footer className="mt-12 mx-auto">
                        <div className="max-w-7xl mx-auto px-4 py-8">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-28">
                                <div>
                                    <div
                                        className='w-[25px] h-[25px] mb-4'
                                    >
                                        <img src={testimonialPic1} alt="Logo" className="mb-4 w-full h-full" />
                                    </div>
                                    <p className="text-sm text-gray-600">www.gbu.ac.in</p>
                                    <p className="text-sm text-gray-600">+977-12345678</p>
                                    <p className="text-sm text-gray-600">127 Chabahil, Kasna</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold mb-4 text-gray-800">Our Services</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>CONNECT WITH CLASSMATE</li>
                                        <li>CONNECT WITH ALUMNI</li>
                                        <li>ALUMNI</li>
                                        <li>EVENTS</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold mb-4 text-gray-800">Take a Tour</h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li>HOME</li>
                                        <li>PRODUCTS</li>
                                        <li>ABOUT US</li>
                                        <li>CONTACT US</li>
                                    </ul>
                                </div>
                                <div className='text-center mt-6'>
                                    <button className='rounded-full text-black border border-black px-8 py-2 mb-6'>Explore</button>
                                    <div className="flex justify-center space-x-4">
                                        <a href="/unknown" className="text-blue-600 hover:text-blue-800"><FaXTwitter className="w-5 h-5" /></a>
                                        <a href="/unknown" className="text-blue-600 hover:text-blue-800"><FaLinkedinIn className="w-5 h-5" /></a>
                                        <a href="/unknown" className="text-blue-600 hover:text-blue-800"><FaMeta className="w-5 h-5" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 flex flex-col md:flex-row justify-center">
                                <p className="text-xs text-gray-500 mb-4 md:mb-0">Copyright © 2023 My Website name Pvt. Ltd. All Rights Reserved.</p>
                            </div>
                        </div>
                    </footer>
                </div >
            </div>

    );
};

export default AlumniMyProfile;

// sachin