import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    year: '',
    phoneNumber: '',
    emailAddress: '',
    gender: '',
    address: '',
    linkedinProfile: '',
    rollNumber: '',
    dateOfBirth: '',
    skillsInterests: '',
    clubActivities: '',
    internships: '',
    resume: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to server
    console.log(formData);
  };

  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-800 p-8 rounded-lg">
      <h1 className="text-white text-3xl font-bold text-center mb-2">Alumni Connect Registration</h1>
      <h4 className='text text-white'>please fill in all the details accurately to connect with your alumini and seniors</h4>
      <form onSubmit={handleSubmit} className="space-y-4 border border-solid bg-gray-200 rounded-2xl mt-10 p-20">
        <div className="flex space-x-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            className="border rounded-full bg-white p-2"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            className="border rounded-full bg-white px-25"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            required
            className="border rounded-full bg-white px-4"
            value={formData.year}
            onChange={handleChange}
          />
        </div>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          required
          className="border rounded-md p-2"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <input
          type="email"
          name="emailAddress"
          placeholder="Email Address"
          required
          className="border rounded-md p-2"
          value={formData.emailAddress}
          onChange={handleChange}
        />
        <select
          name="gender"
          required
          className="border rounded-md p-2"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="address"
          placeholder="Address"
          required
          className="border rounded-md p-2"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        <input
          type="text"
          name="linkedinProfile"
          placeholder="LinkedIn Profile"
          className="border rounded-md p-2"
          value={formData.linkedinProfile}
          onChange={handleChange}
        />
        <div className="flex space-x-4">
          <input
            type="text"
            name="rollNumber"
            placeholder="Roll Number"
            required
            className="border rounded-md p-2"
            value={formData.rollNumber}
            onChange={handleChange}
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            required
            className="border rounded-md p-2"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          <input
            type="text"
            name="skillsInterests"
            placeholder="Skills/Interests"
            required
            className="border rounded-md p-2"
            value={formData.skillsInterests}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="clubActivities"
          placeholder="Club Activities"
          className="border rounded-md p-2"
          value={formData.clubActivities}
          onChange={handleChange}
        ></textarea>
        <textarea
          name="internships"
          placeholder="Internships"
          className="border rounded-md p-2"
          value={formData.internships}
          onChange={handleChange}
        ></textarea>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          className="border rounded-md p-2"
          onChange={handleFileChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-100"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Registration;