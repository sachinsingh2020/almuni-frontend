import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

// Sample data for dropdowns with "Not Chosen" option
const locationOptions = [
    { value: 'Not Chosen', label: 'Not Chosen' },
    { value: 'Remote', label: 'Remote' },
    { value: 'Delhi, India', label: 'Delhi, India' },
    { value: 'Mumbai, India', label: 'Mumbai, India' },
    { value: 'Bangalore, India', label: 'Bangalore, India' },
    { value: 'Hyderabad, India', label: 'Hyderabad, India' },
    { value: 'Chennai, India', label: 'Chennai, India' },
    { value: 'Kolkata, India', label: 'Kolkata, India' },
    { value: 'Pune, India', label: 'Pune, India' },
    { value: 'Jaipur, India', label: 'Jaipur, India' },
    { value: 'Ahmedabad, India', label: 'Ahmedabad, India' },
];

const skillsOptions = [
    { value: 'Not Chosen', label: 'Not Chosen' },
    { value: 'React.js', label: 'React.js' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Express', label: 'Express' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'CSS', label: 'CSS' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'C++', label: 'C++' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'HTML', label: 'HTML' },
    { value: 'Redux', label: 'Redux' },
    { value: 'Docker', label: 'Docker' },
    { value: 'AWS', label: 'AWS' },
];

const JobFilterSection = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState(null);
    const [skills, setSkills] = useState([]);

    const navigate = useNavigate();

    const handleApplyFilters = () => {
        const params = new URLSearchParams();

        if (jobTitle) {
            params.append('keyword', jobTitle);
        }

        if (location && location.value !== 'Not Chosen') {
            params.append('location', location.value);
        }

        if (skills.length > 0 && !skills.some(skill => skill.value === 'Not Chosen')) {
            const skillsQuery = skills.map(skill => skill.value).join(', ');
            params.append('skills', skillsQuery);
        }

        const queryString = params.toString();
        navigate(`/job-portal?${queryString}`);
    };

    return (
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
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
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
                        value={location}
                        onChange={(selectedOption) => setLocation(selectedOption)}
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
                        value={skills}
                        onChange={(selectedOptions) => setSkills(selectedOptions)}
                    />
                </div>

                {/* Apply Filters Button */}
                <button
                    onClick={handleApplyFilters}
                    className="bg-blue-700 text-white px-4 py-2 rounded-md w-full">
                    Apply Filters
                </button>
            </div>
        </aside>
    );
};

export default JobFilterSection;
