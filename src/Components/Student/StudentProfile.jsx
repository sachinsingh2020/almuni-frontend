import React, { } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Helpers/Navbar';
import { FaLinkedinIn, FaPhone, FaEnvelope, FaCalendarAlt, FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';
// ashish 

const StudentProfile = () => {
    const { user } = useSelector(state => state.user);
    const navigate = useNavigate(); // Hook to handle navigation


    const handleEditProfile = () => {
        navigate('/student-edit-profile');
    };

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            {user && (
                <div className="max-w-7xl mx-auto px-4 py-8 h-full">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-900 rounded-lg shadow-xl overflow-hidden"
                    >
                        <div className="p-6 md:px-8 md:py-20 flex flex-col md:flex-row items-center justify-between h-"
                        >
                            <div className="text-white mb-6 md:mb-0 md:w-2/3">
                                <h2 className="text-xl font-semibold mb-2">Hello,</h2>
                                <h3 className="text-4xl font-bold mb-4">
                                    {user.firstName} {user.lastName}
                                </h3>
                                <p className="mb-4 text-sm">
                                    {user.course} - Class of {user.graduationYear}
                                </p>
                                <div className="flex flex-col space-y-2 mb-4">
                                    <div className="flex items-center space-x-2">
                                        <FaLinkedinIn className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
                                        <a href={user.linkedin} target="_blank" rel="noopener noreferrer" className="text-md">
                                            {user.linkedin}
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <FaEnvelope className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
                                        <span className="text-md">{user.email}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <FaPhone className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
                                        <span className="text-md">{user.phoneNumber}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-shrink-0 md:w-1/3 flex flex-col items-center">
                                <img
                                    src={user.profilePic.url}
                                    alt="Profile"
                                    className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg mb-4"
                                />
                                <button
                                    onClick={handleEditProfile}
                                    className="mt-4 px-4 py-2 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-100 transition duration-200"
                                >
                                    Edit Profile
                                </button>
                            </div>
                        </div>
                        <div className="bg-white p-4 flex justify-around py-8">
                            <div className="text-center">
                                <FaCalendarAlt className="w-10 h-10 cursor-pointer mx-auto" />
                                <p className="mt-2 text-md font-medium text-gray-600">
                                    Date of Birth: {user.dateOfBirth}
                                </p>
                            </div>
                            <div className="text-center">
                                <FaMapMarkerAlt className="w-10 h-10 cursor-pointer mx-auto" />
                                <p className="mt-2 text-md font-medium text-gray-600">
                                    {user.address}
                                </p>
                            </div>
                            <div className="text-center">
                                <FaGraduationCap className="w-10 h-10 cursor-pointer mx-auto" />
                                <p className="mt-2 text-md font-medium text-gray-600">
                                    {user.course} - {user.graduationYear}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentProfile;
