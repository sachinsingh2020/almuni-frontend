import React from 'react';
import Navbar from '../../Helpers/Navbar';

const AlumniJobPost = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Job Posting</h2>

      <form className='px-28 space-y-4'>
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="React Developer / Full Stack Developer / MERN"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Google"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobLocation" className="block text-sm font-medium text-gray-700">
            Job Location
          </label>
          <input
            type="text"
            id="jobLocation"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Delhi"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="skillsRequired" className="block text-sm font-medium text-gray-700">
            Skills Required
          </label>
          <input
            type="text"
            id="skillsRequired"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Java, Python, Azure, web development"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="aboutCompany" className="block text-sm font-medium text-gray-700">
            About Company
          </label>
          <textarea
            id="aboutCompany"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="All are welcome hehehe"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">
            Job Type
          </label>
          <select
            id="jobType"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Delhi"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="benefits" className="block text-sm font-medium text-gray-700">
            Benefits
          </label>
          <textarea
            id="benefits"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder={`1. Financial Benefits: Competitive salary, bonuses, stock options.\n2. Health & Wellness: Health insurance, paid time off, wellness programs.\n3. Career Growth: Training, mentorship, promotion opportunities.\n4. Work-Life Balance: Flexible hours, remote work, supportive environment.`}
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-10 py-2 mb-6 bg-gradient-to-tr from-blue-700 to-blue-900 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlumniJobPost;

