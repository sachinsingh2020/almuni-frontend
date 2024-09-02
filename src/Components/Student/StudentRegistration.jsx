import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
          <input
            type="number"
            name="graduationYear"
            placeholder="Graduation Year *"
            required
            className="border rounded-full bg-white p-4"
            value={formData.graduationYear}
            onChange={handleChange}
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
          <input
            type="text"
            name="course"
            placeholder="Course"
            required
            className="border rounded-full bg-white p-4"
            value={formData.course}
            onChange={handleChange}
          />
          <input
            type="text"
            name="branch"
            placeholder="Branch"
            required
            className="border rounded-full bg-white p-4"
            value={formData.branch}
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

export default StudentRegistration;
