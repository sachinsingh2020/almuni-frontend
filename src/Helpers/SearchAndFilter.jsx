import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchAndFilter = () => {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState('');

    const [dropdowns, setDropdowns] = useState({
        Graduation: false,
        Company: false,
        'Course': false,
    });

    const [selectedValues, setSelectedValues] = useState({
        Graduation: 'Not chosen',
        Company: 'Not chosen',
        'Course': 'Not chosen',
    });

    const dropdownOptions = {
        Graduation: ['Not chosen', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
        Company: ['Not chosen', 'Google', 'Apple', 'Microsoft', 'Amazon'],
        'Course': ['Not chosen', 'Integrated Btech-Mtech', 'Btech', 'Mtech', 'BCA', 'MCA', 'BioTech', 'BBA', 'MBA', 'BSc', 'MSc', 'BCom', 'MCom'],
    };

    useEffect(() => {
        const filters = {};
        if (keyword.trim()) {
            filters.keyword = keyword;
        }
        if (selectedValues.Graduation !== 'Not chosen') {
            filters.graduationYear = selectedValues.Graduation;
        }
        if (selectedValues.Company !== 'Not chosen') {
            filters.industry = selectedValues.Company;
        }
        if (selectedValues['Course'] !== 'Not chosen') {
            filters.fieldOfStudy = selectedValues['Course'];
        }

        const query = new URLSearchParams(filters).toString();
        navigate(`/alumni-search?${query}`);
    }, [keyword, selectedValues, navigate]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    const toggleDropdown = (key) => {
        setDropdowns(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleOptionSelect = (filter, option) => {
        setSelectedValues(prev => ({ ...prev, [filter]: option }));
        setDropdowns(prev => ({ ...prev, [filter]: false }));
    };

    return (
        <div>
            <header className="mb-4 py-6">
                <div className="max-w-8xl mx-auto py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-800">Alumni Connect</h1>
                    <nav className="space-x-12">
                        <a href="#" className="text-gray-900 font-semibold">Donate</a>
                        <a href="#" className="text-gray-900 font-semibold">Job Portal</a>
                        <a href="#" className="text-gray-900 font-semibold">Profile</a>
                        <button className="bg-gradient-to-tr from-blue-700 to-blue-900 text-white px-4 py-1 rounded">Logout</button>
                    </nav>
                </div>
            </header>

            <div className="relative mb-4">
                <input
                    type="text"
                    placeholder="search by name"
                    className="w-full py-2 px-3 pr-24 border border-gray-300 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button className="absolute right-0 top-0 bottom-0 px-14 bg-gradient-to-tr from-blue-700 to-blue-900 text-white rounded-full hover:bg-blue-600 transition-colors">
                    Search
                </button>
            </div>
            <div className="flex justify-between mb-4">
                {Object.keys(dropdowns).map((filter) => (
                    <div key={filter} className="relative mt-4">
                        <label className="block text-gray-700 font-semibold mb-2 text-center">{filter}</label>
                        <button
                            onClick={() => toggleDropdown(filter)}
                            className="flex items-center justify-center px-8 py-2 bg-gradient-to-tr from-blue-700 to-blue-900 mt-2 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            {selectedValues[filter]} <FaChevronDown className="ml-1 text-sm" />
                        </button>
                        {dropdowns[filter] && (
                            <div className="absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    {dropdownOptions[filter].map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleOptionSelect(filter, option)}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                            role="menuitem"
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchAndFilter;
