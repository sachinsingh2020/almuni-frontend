import React, { useEffect, useState } from 'react';
import AlumniNavbar from '../../Helpers/AlumniNavbar';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { createAJob } from '../../redux/actions/job';

const skillsOptions = [
  { value: 'React.js', label: 'React.js' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'HTML', label: 'HTML' },
  { value: 'CSS', label: 'CSS' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'Git', label: 'Git' },
  { value: 'GitHub', label: 'GitHub' },
  { value: 'Java', label: 'Java' },
  { value: 'Python', label: 'Python' },
  { value: 'C++', label: 'C++' },
  { value: 'Flutter', label: 'Flutter' },
  // Add more options as needed
];

const perksOptions = [
  { value: 'Certificate', label: 'Certificate' },
  { value: 'Letter of Recommendation', label: 'Letter of Recommendation' },
  { value: 'Work from Home', label: 'Work from Home' },
  { value: 'Flexible Hours', label: 'Flexible Hours' },
  // Add more options as needed
];

const locationOptions = [
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

const AlumniJobPost = () => {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.job);

  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    jobLocation: '',
    expectedPackage: '',
    jobType: '',
    skillsRequired: [],
    perks: [],
    numberOfOpenings: '',
    aboutCompany: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLocationChange = (selectedOption) => {
    setFormData(prevState => ({
      ...prevState,
      jobLocation: selectedOption ? selectedOption.value : '',
    }));
  };

  const handleSkillsChange = (selectedOptions) => {
    setFormData(prevState => ({
      ...prevState,
      skillsRequired: selectedOptions ? selectedOptions.map(option => option.value) : [],
    }));
  };

  const handlePerksChange = (selectedOptions) => {
    setFormData(prevState => ({
      ...prevState,
      perks: selectedOptions ? selectedOptions.map(option => option.value) : [],
    }));
  };

  const handlePostButton = async (e) => {
    e.preventDefault();
    console.log({ formData });
    await dispatch(createAJob(formData));
    // Dispatch your action here with formData
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <div>
      <div>
        <AlumniNavbar />
      </div>

      <h2 className="text-3xl font-bold text-center mb-8">Job Posting</h2>

      <form className='px-28 space-y-4' onSubmit={handlePostButton}>
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
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
            value={formData.companyName}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Google"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobLocation" className="block text-sm font-medium text-gray-700">
            Job Location
          </label>
          <Select
            id="jobLocation"
            options={locationOptions}
            value={locationOptions.find(option => option.value === formData.jobLocation)}
            onChange={handleLocationChange}
            className="mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Select Job Location"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="expectedPackage" className="block text-sm font-medium text-gray-700">
            Expected Package
          </label>
          <input
            type="text"
            id="expectedPackage"
            value={formData.expectedPackage}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="15 LPA"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="jobType" className="block text-sm font-medium text-gray-700">
            Job Type
          </label>
          <select
            id="jobType"
            value={formData.jobType}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Not Chosen</option> {/* "Not Chosen" option */}
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Full Time">Full Time</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="skillsRequired" className="block text-sm font-medium text-gray-700">
            Skills Required
          </label>
          <Select
            id="skillsRequired"
            isMulti
            options={skillsOptions}
            value={skillsOptions.filter(option => formData.skillsRequired.includes(option.value))}
            onChange={handleSkillsChange}
            className="mt-1 block w-full rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="perks" className="block text-sm font-medium text-gray-700">
            Perks
          </label>
          <Select
            id="perks"
            isMulti
            options={perksOptions}
            value={perksOptions.filter(option => formData.perks.includes(option.value))}
            onChange={handlePerksChange}
            className="mt-1 block w-full  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="numberOfOpenings" className="block text-sm font-medium text-gray-700">
            Number of Openings
          </label>
          <input
            type="number"
            id="numberOfOpenings"
            value={formData.numberOfOpenings}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="3"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="aboutCompany" className="block text-sm font-medium text-gray-700">
            About Company
          </label>
          <textarea
            id="aboutCompany"
            value={formData.aboutCompany}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
            placeholder="About the company..."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? 'Posting...' : 'Post Job'}
        </button>
      </form>
    </div>
  );
};

export default AlumniJobPost;
