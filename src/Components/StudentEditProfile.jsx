import React, { useEffect, useState } from "react";
import {
  FaBell,
  FaUserCircle,
  FaHome,
  FaCalendar,
  FaUserGraduate,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, updateUserDetails, updateUserProfilePic } from "../redux/actions/user";
import toast from "react-hot-toast";

const StudentEditProfile = () => {
  const { user, error, message } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user.firstName || "");
  const [lastName, setLastName] = useState(user.lastName || "");
  const [email, setEmail] = useState(user.email || "");
  const [graduationYear, setGraduationYear] = useState(user.graduationYear || "");
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");
  const [linkedin, setLinkedin] = useState(user.linkedin || "");
  const [address, setAddress] = useState(user.address || "");
  const [rollNumber, setRollNumber] = useState(user.rollNumber || "");
  const [course, setCourse] = useState(user.course || "");
  const [branch, setBranch] = useState(user.branch || "");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleProfilePicUpdate = async (e) => {
    e.preventDefault();
    dispatch(updateUserProfilePic(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      firstName,
      lastName,
      email,
      graduationYear,
      phoneNumber,
      linkedin,
      address,
      rollNumber,
      course,
      branch,
    };

    await dispatch(updateUserDetails(updatedUser));
    await dispatch(loadUser());
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="flex flex-col w-20 bg-gradient-to-t from-blue-600 to-blue-800 text-white p-4 items-center">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-pink-500 rounded-full p-2">
            <span className="text-2xl font-bold">Pd</span>
          </div>
        </div>
        <div className="space-y-8">
          <button className="flex items-center justify-center w-full text-white focus:outline-none">
            <FaHome className="text-2xl" />
          </button>
          <button className="flex items-center justify-center w-full text-white focus:outline-none">
            <FaUserCircle className="text-2xl" />
          </button>
          <button className="flex items-center justify-center w-full text-white focus:outline-none">
            <FaBell className="text-2xl" />
          </button>
          <button className="flex items-center justify-center w-full text-white focus:outline-none">
            <FaCalendar className="text-2xl" />
          </button>
          <button className="flex items-center justify-center w-full text-white focus:outline-none">
            <FaUserGraduate className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 mx-12">
          <h1 className="text-3xl font-bold">Edit Profile</h1>
        </div>

        <div className="flex flex-col mb-4 items-center mt-8">
          <input
            type="file"
            id="file"
            name="file"
            accept=".jpg,.jpeg,.png"
            className="hidden"
            onChange={handleFileChange}
          />

          <div className="mt-4 relative">
            <img
              src={preview || user.profilePic.url}
              alt="Profile Preview"
              className="w-24 h-34 rounded-xl border border-gray-300"
            />
            <label
              htmlFor="file"
              className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity text-center cursor-pointer">
              Update Profile
            </label>
          </div>

          {preview && <div
            onClick={handleProfilePicUpdate}
            className="bg-blue-600 text-white mt-3  font-bold py-2 px-6 rounded-full cursor-pointer hover:bg-blue-500"
          >
            Upload Profile Picture
          </div>
          }
        </div>

        {/* Profile Edit Form */}
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Contact Number
                </label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              {/* Graduation Year */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Graduation Year
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(e.target.value)}
                  required
                />
              </div>

              {/* Roll Number */}
              <div>
                <label className="block text-gray-700 mb-2">Roll Number</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  required
                />
              </div>

              {/* Course */}
              <div>
                <label className="block text-gray-700 mb-2">Course</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  required
                />
              </div>

              {/* Branch */}
              <div>
                <label className="block text-gray-700 mb-2">Branch</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  required
                />
              </div>

              {/* Linkedin */}
              <div>
                <label className="block text-gray-700 mb-2">LinkedIn</label>
                <input
                  type="url"
                  className="w-full p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-500 transition duration-200 ease-in-out"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentEditProfile;
