import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/user';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { alumniRegister } from '../../redux/actions/alumni';

function AlumniRegistration() {
    const dispatch = useDispatch();

    const { loading, alumniError, message } = useSelector((state) => state.alumni);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: 'alumni',
        graduationYear: '',
        fieldOfStudy: '',
        profession: '',
        industry: '',
        jobLocation: '',
        password: '',
        linkedin: '',
        github: '',
        twitter: '',
        instagram: '',
        portfolio: '',
        file: null,
        dateOfBirth: '',
    });

    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            file: file,
        });
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(alumniRegister(formData));
    };

    useEffect(() => {
        if (alumniError) {
            toast.error(alumniError);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, alumniError, message]);

    const currentYear = new Date().getFullYear();
    const graduationYears = Array.from({ length: currentYear - 2018 }, (_, i) => 2019 + i);
    const industries = [
        'Google', 'Amazon', 'Microsoft', 'Apple', 'Facebook', 'IBM', 'Oracle', 'Tesla',
        'Intel', 'Samsung', 'Cisco', 'Adobe', 'Salesforce', 'Twitter', 'LinkedIn',
        'Netflix', 'Uber', 'Spotify', 'Airbnb', 'SpaceX'
    ];
    const fieldsOfStudy = [
        'Integrated Btech-Mtech', 'Btech', 'Mtech', 'BCA', 'MCA', 'Bsc', 'Msc', 'Biotech',
        'BBA', 'MBA', 'BA', 'MA', 'PhD'
    ];

    return (
        <div className="bg-blue-700 p-8 min-h-screen flex flex-col items-center">
            <div className="w-full text-center mb-4">
                <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">Alumni Registration</h1>
                <h4 className="text-white text-lg md:text-xl mb-4">Please fill in all the details accurately</h4>
            </div>
            <Link to="/alumni-login" className="text-white text-lg mb-4 hover:underline">Already have an account? <span className='font-bold'>Login here</span> </Link>
            <form onSubmit={handleSubmit} className="w-full max-w-7xl mx-auto p-8 bg-[#f2f2f2] rounded-2xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name *"
                        required
                        className="border rounded-full bg-white p-4"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name *"
                        required
                        className="border rounded-full bg-white p-4"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        required
                        className="border rounded-full bg-white p-4"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <select
                        name="graduationYear"
                        required
                        className="border rounded-full bg-white p-4"
                        value={formData.graduationYear}
                        onChange={handleChange}
                    >
                        <option value="">Graduation Year *</option>
                        {graduationYears.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    <select
                        name="fieldOfStudy"
                        required
                        className="border rounded-full bg-white p-4"
                        value={formData.fieldOfStudy}
                        onChange={handleChange}
                    >
                        <option value="">Course *</option>
                        {fieldsOfStudy.map((field) => (
                            <option key={field} value={field}>{field}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        name="profession"
                        placeholder="Profession *"
                        required
                        className="border rounded-full bg-white p-4"
                        value={formData.profession}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <select
                        name="industry"
                        required
                        className="border rounded-full bg-white p-4"
                        value={formData.industry}
                        onChange={handleChange}
                    >
                        <option value="">Industry *</option>
                        {industries.map((industry) => (
                            <option key={industry} value={industry}>{industry}</option>
                        ))}
                    </select>
                    <input
                        type="text"
                        name="jobLocation"
                        placeholder="Job Location *"
                        required
                        className="border rounded-full bg-white p-4"
                        value={formData.jobLocation}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="dateOfBirth"
                        placeholder="Date of Birth *"
                        required
                        className="border rounded-full bg-white p-4"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="password"
                    name="password"
                    placeholder="Password *"
                    required
                    className="border rounded-full bg-white p-4 mb-4 w-full"
                    value={formData.password}
                    onChange={handleChange}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="linkedin"
                        placeholder="LinkedIn Profile"
                        className="border rounded-full bg-white p-4"
                        value={formData.linkedin}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="github"
                        placeholder="GitHub Profile"
                        className="border rounded-full bg-white p-4"
                        value={formData.github}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                        type="text"
                        name="twitter"
                        placeholder="Twitter Profile"
                        className="border rounded-full bg-white p-4"
                        value={formData.twitter}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="instagram"
                        placeholder="Instagram Profile"
                        className="border rounded-full bg-white p-4"
                        value={formData.instagram}
                        onChange={handleChange}
                    />
                </div>

                <input
                    type="text"
                    name="portfolio"
                    placeholder="Portfolio Website"
                    className="border rounded-full bg-white p-4 mb-4 w-full"
                    value={formData.portfolio}
                    onChange={handleChange}
                />

                <div className="flex flex-col mb-4 items-center mt-8">
                    <label
                        htmlFor="file"
                        className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full cursor-pointer hover:bg-blue-500"
                    >
                        Upload Profile Picture
                    </label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        accept=".jpg,.jpeg,.png"
                        className="hidden"
                        onChange={handleFileChange}
                    />
                    {preview && (
                        <div className="mt-4">
                            <img
                                src={preview}
                                alt="Profile Preview"
                                className="w-24 h-34 rounded-xl border border-gray-300"
                            />
                        </div>
                    )}
                </div>

                <div className="flex justify-center items-center w-full mt-8">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-bold p-4 rounded-full hover:bg-blue-500 w-full md:w-1/2"
                    >
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AlumniRegistration;
