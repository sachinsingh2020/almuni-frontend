import React, { useState } from 'react';
import { FaSearch, FaChevronDown} from 'react-icons/fa';
import { FaUserGraduate, FaBriefcase, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';
import AlumniCard from './AlumniCard';


const JobSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [dropdowns, setDropdowns] = useState({
    Graduation: false,
    Company: false,
    'Job Posted': false,
  });

  const toggleDropdown = (key) => {
    setDropdowns(prev => ({...prev, [key]: !prev[key]}));
  };

  const dropdownOptions = {
    Graduation: ['2020', '2021', '2022', '2023'],
    Company: ['Google', 'Apple', 'Microsoft', 'Amazon'],
    'Job Posted': ['Last 24 hours', 'Last week', 'Last month', 'All time'],
  };

  return (
    <div className= " rounded-lg shadow-m px-24">
        <header className=" mb-4 py-6">
        <div className="max-w-8xl mx-auto py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Alumni Connect</h1>
          <nav className="space-x-12">
            <a href="#" className="text-gray-900 font-semibold">Donate</a>
            <a href="#" className="text-gray-900 font-semibold">Job Portal</a>
            <a href="#" className="text-gray-900 font-semibold">Profile</a>
            <button className="bg-gradient-to-tr from-blue-700 to-blue-900  text-white px-4 py-1 rounded">Logout</button>
          </nav>
        </div>
      </header>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="search by name"
          className="w-full p-2 pr-24 border border-gray-300 bg-slate-50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="absolute right-0 top-0 bottom-0 px-14 bg-gradient-to-tr from-blue-700 to-blue-900 text-white rounded-full hover:bg-blue-600 transition-colors">
          Search
        </button>
      </div>

      <div className="flex justify-between mb-4">
        {Object.keys(dropdowns).map((filter) => (
          <div key={filter} className="relative">
            <button 
              onClick={() => toggleDropdown(filter)}
              className="flex items-center justify-center px-8 py-2 bg-gradient-to-tr from-blue-700 to-blue-900 mt-10 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              {filter} <FaChevronDown className="ml-1 text-sm" />
            </button>
            {dropdowns[filter] && (
              <div className="absolute z-10 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {dropdownOptions[filter].map((option) => (
                    <a
                      key={option}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative mb-2 mt-10">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
        <input
          type="text"
          placeholder="search"
          className="w-full p-2 pl-10 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 bg-slate-50"
        />
      </div>
      <div className='flex justify-evenly'>
      <AlumniCard/>
      <AlumniCard/>
      </div>
    </div>
  );
};

export default JobSearch;