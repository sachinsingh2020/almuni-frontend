import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { register } from '../../redux/actions/user';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

function StudentRegistration() {
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    graduationYear: '',
    phoneNumber: '',
    email: '',
    gender: '',
    address: '',
    linkedin: '',
    rollNumber: '',
    dateOfBirth: '',
    file: null,
    role: 'user',
    course: '',
    branch: "",
    password: '',
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    setFormData({
      ...formData,
      [actionMeta.name]: selectedOption ? selectedOption.value : '',
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
    await dispatch(register(formData));
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

  // Graduation Year Options from current year to 2030
  const currentYear = new Date().getFullYear();
  const graduationYearOptions = Array.from({ length: 2031 - currentYear }, (_, i) => ({
    value: currentYear + i,
    label: (currentYear + i).toString(),
  }));

  // Course Options
  const courseOptions = [
    { value: 'Integrated Btech-Mtech', label: 'Integrated Btech-Mtech' },
    { value: 'Btech', label: 'Btech' },
    { value: 'Mtech', label: 'Mtech' },
    { value: 'Bsc', label: 'Bsc' },
    { value: 'Bca', label: 'Bca' },
    { value: 'Mca', label: 'Mca' },
    // Add more courses as needed
  ];

  // Branch Options
  const branchOptions = [
    { value: 'AI', label: 'AI' },
    { value: 'Data Science', label: 'Data Science' },
    { value: 'Computer Science', label: 'Computer Science' },
    { value: 'Pharmacology', label: 'Pharmacology' },
    // Add more branches as needed
  ];

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: '9999px', // Full rounded border
      border: 'none', // Remove the default border
      boxShadow: 'none', // Remove the default box shadow
      padding: '0.5rem', // Padding to match the input fields
      backgroundColor: 'white', // Ensure the background color matches the input fields
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#3b82f6' : 'white', // Change the background color of selected option
      color: state.isSelected ? 'white' : 'black', // Change the text color of selected option
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: '#3b82f6', // Change the color of the dropdown indicator
    }),
    indicatorSeparator: () => ({
      display: 'none', // Remove the separator line between the indicator and the control
    }),
  };

  return (
    <div className="bg-blue-700 p-8 min-h-screen flex flex-col items-center">
      <div className="w-full text-center mb-4">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">Alumni Connect Student Registration</h1>
        <h4 className="text-white text-lg md:text-xl mb-4">Please fill in all the details accurately to connect with your alumni and seniors</h4>
      </div>
      <Link to="/student-login" className="text-white text-lg  mb-4 hover:underline">Already have an account? <span className='font-bold'>Login here</span> </Link>
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
          <Select
            name="graduationYear"
            placeholder="Graduation Year *"
            options={graduationYearOptions}
            value={graduationYearOptions.find(option => option.value === formData.graduationYear)}
            onChange={handleSelectChange}
            styles={customStyles} // Apply custom styles here
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number *"
            required
            className="border rounded-full bg-white p-4"
            value={formData.phoneNumber}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <select
            name="gender"
            required
            className="border rounded-full bg-white p-4"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender *</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn Profile"
            className="border rounded-full bg-white p-4"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Address *"
          required
          className="border rounded-full bg-white p-4 mb-4 w-full"
          value={formData.address}
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number *"
            required
            className="border rounded-full bg-white p-4"
            value={formData.rollNumber}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Select
            name="course"
            placeholder="Course *"
            options={courseOptions}
            value={courseOptions.find(option => option.value === formData.course)}
            onChange={handleSelectChange}
            styles={customStyles} // Apply custom styles here
            required
          />
          <Select
            name="branch"
            placeholder="Branch *"
            options={branchOptions}
            value={branchOptions.find(option => option.value === formData.branch)}
            onChange={handleSelectChange}
            styles={customStyles} // Apply custom styles here
            required
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

        <div className="mb-4">
          <input
            type="file"
            name="file"
            required
            className="border rounded-full bg-white p-4 mb-4 w-full"
            onChange={handleFileChange}
          />
          {preview && <img src={preview} alt="Preview" className="w-40 h-40 object-cover rounded-full" />}
        </div>

        <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors duration-300">Register</button>
      </form>
    </div>
  );
}

export default StudentRegistration;
