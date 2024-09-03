import React from 'react';
import Select from 'react-select';
import AlumniNavbar from '../../Helpers/AlumniNavbar';

// Sample data for dropdowns
const locationOptions = [
    { value: 'Remote', label: 'Remote' },
    { value: 'New York, USA', label: 'New York, USA' },
    { value: 'San Francisco, USA', label: 'San Francisco, USA' },
    { value: 'London, UK', label: 'London, UK' },
    { value: 'Bangalore, India', label: 'Bangalore, India' },
    { value: 'Sydney, Australia', label: 'Sydney, Australia' }
];

const skillsOptions = [
    { value: 'React', label: 'React' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Express', label: 'Express' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
];

const JobPortal = () => {
    return (
        <div>
            <AlumniNavbar />
            <div className="flex px-20 py-6">
                {/* Filters Section */}
                <aside className="w-1/4 pr-6">
                    <div className="bg-white shadow-lg p-4 rounded-md">
                        <h2 className="text-xl font-semibold mb-4">Filters</h2>

                        {/* Job Title Filter */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">
                                Job Title
                            </label>
                            <input
                                type="text"
                                placeholder="Enter job title"
                                className="w-full border border-gray-300 rounded-md px-3 py-2"
                            />
                        </div>

                        {/* Location Filter */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">
                                Location
                            </label>
                            <Select
                                options={locationOptions}
                                isSearchable
                                placeholder="Select location"
                                className="w-full border border-gray-300 rounded-md"
                            />
                        </div>

                        {/* Skills Filter */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">
                                Skills
                            </label>
                            <Select
                                options={skillsOptions}
                                isMulti
                                isSearchable
                                placeholder="Select skills"
                                className="w-full border border-gray-300 rounded-md"
                            />
                        </div>

                        {/* Apply Filters Button */}
                        <button className="bg-blue-700 text-white px-4 py-2 rounded-md w-full">
                            Apply Filters
                        </button>
                    </div>
                </aside>

                {/* Job Listings Section */}
                <section className="w-3/4">
                    <div className="bg-white shadow-lg p-4 rounded-md">
                        <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>

                        {/* Sample Job Card */}
                        <div className="bg-gray-100 p-4 rounded-md mb-4">
                            <h3 className="text-lg font-semibold text-blue-900">Frontend Developer</h3>
                            <p className="text-gray-700">Location: Remote</p>
                            <p className="text-gray-700">Skills: React, JavaScript, CSS</p>
                            <button className="mt-2 text-blue-700">View Details</button>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-md mb-4">
                            <h3 className="text-lg font-semibold text-blue-900">Backend Developer</h3>
                            <p className="text-gray-700">Location: New York, USA</p>
                            <p className="text-gray-700">Skills: Node.js, Express, MongoDB</p>
                            <button className="mt-2 text-blue-700">View Details</button>
                        </div>

                        <div className="bg-gray-100 p-4 rounded-md mb-4">
                            <h3 className="text-lg font-semibold text-blue-900">Full Stack Developer</h3>
                            <p className="text-gray-700">Location: New York, USA</p>
                            <p className="text-gray-700">Skills: Node.js, Express, MongoDB</p>
                            <button className="mt-2 text-blue-700">View Details</button>
                        </div>

                        {/* More job cards can be added here */}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default JobPortal;
