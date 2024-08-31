import React from "react";
import { FaBell, FaUserCircle,FaHome,FaCalendar, FaUserGraduate } from "react-icons/fa";

const StudentEditProfile = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="flex flex-col w-1/9 bg-gradient-to-t from-blue-600 to-blue-800  text-white p-4 items-center">
        <div className="flex items-center justify-center mb-8">
          <div className="bg-pink-500 rounded-full p-2">
            <span className="text-2xl font-bold">Pd</span>
          </div>
        </div>
        <div className="space-y-16">
          <button className="flex items-center space-x-3 text-white focus:outline-none">
            <FaHome className="text-2xl mt-10" />
          </button>
          <button className="flex items-center space-x-3 text-white focus:outline-none">
            <FaUserCircle className="text-2xl" />
          </button>
          <button className="flex items-center space-x-3 text-white focus:outline-none">
            <FaBell className="text-2xl" />
          </button>
          <button className="flex items-center space-x-3 text-white focus:outline-none">
            <FaCalendar className="text-2xl" />
          </button>
          <button className="flex items-center space-x-3 text-white focus:outline-none">
            <FaUserGraduate className="text-2xl" />
          </button>
          {/* Add more buttons as per the design */}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 m-12">
        {/* Header */}
        <div className="flex justify-between mb-8">
          <h1 className="text-3xl font-bold m-6">Edit Profile</h1>
          <div className="">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="rounded-full w-20 h-20 object-cover"
            />
          </div>
        </div>

        {/* Profile Edit Form */}
        <div className="p-6 rounded-lg mx-auto">
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded-full"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  className="w-full p-2 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Contact Number</label>
                <input
                  type="text"
                  
                  className="w-full p-2 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="flex space-x-4 mb-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 mb-2">City</label>
                  <select
                    className="w-full p-2 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option>Noida</option>
                    <option>Delhi</option>
                    <option>Kasna</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 mb-2">State</label>
                  <select
                    className="w-full p-2 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option>UttarPradesh</option>
                    <option>Rajasthan</option>
                    <option>Harayana</option>
                    <option>Punjab</option>
                    <option>Bihar</option>
                  </select>
                </div>
              </div>

              <div className="col-span-2 mb-6">
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border border-gray-400 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-start space-x-8">
              <button
                type="button"
                className="px-8 py-1 border-2 border-blue-700 text-blue-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-1 bg-gradient-to-l from-blue-600 to-blue-800 text-white rounded hover:bg-blue-600 focus:outline-none"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentEditProfile;
