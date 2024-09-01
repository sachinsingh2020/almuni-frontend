import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { FaMeta } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";
import { FaAt } from "react-icons/fa";
import { FaHubspot } from "react-icons/fa";
// import { AiFillTrophy } from 'react-icons/ai';
// import { BsPlayFill } from 'react-icons/bs';
// import { IoMdSparkles } from 'react-icons/io';

const AlumniViewProfile = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="shadow-xl mb-4 py-6">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Alumni Connect</h1>
          <nav className="space-x-12">
            <a href="#" className="text-gray-900 font-semibold">Donate</a>
            <a href="#" className="text-gray-900 font-semibold">Job Portal</a>
            <a href="#" className="text-gray-900 font-semibold">Profile</a>
            <button className="bg-gradient-to-tr from-blue-700 to-blue-900  text-white px-4 py-1 rounded">Logout</button>
          </nav>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-gradient-to-tr from-blue-700 to-red-600 rounded-lg shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-6 md:mb-0 md:w-2/3">
                <h2 className="text-xl font-semibold mb-2">Hello World,</h2>
                <h3 className="text-4xl font-bold mb-4">I am Ashish, Developer</h3>
                <p className="mb-4 text-sm">Quis egest felis lobortism, pretium mi sed placerat ante. Vivamus ut amet interdum elis.</p>
                <div className="flex space-x-4 mb-4">
                  <FaMeta className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
                  <FaXTwitter className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
                  <FaLinkedinIn className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
                  <FaInstagram className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
                  <FaYoutube className="w-5 h-5 text-white cursor-pointer hover:text-gray-200" />
                </div>
              </div>
              <div className="flex-shrink-0 md:w-1/3 flex flex-col items-center">
                <img src="" alt="profile img" className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-lg mb-4" />
                <div className="bg-white text-gray-800 rounded-lg p-3 flex items-center space-x-2 shadow-md">
                  {/* <IoMdSparkles className="w-5 h-5 text-yellow-500" /> */}
                  <span className="text-sm font-medium">Working in GOOGLE</span>
                </div>
                <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded-full font-medium hover:bg-green-600 transition duration-300">CONNECT NOW</button>
              </div>
            </div>
            <div className="bg-white p-4 flex justify-around">
              <div className="text-center">
                <FaGraduationCap className="w-10 h-10 cursor-pointer mx-auto" />
                <p className="mt-2 text-xs font-medium text-gray-600">ACADEMIC YEAR 2022-2023</p>
              </div>
              <div className="text-center">
                <FaHubspot className="w-10 h-10 cursor-pointer mx-auto" /> 
                <p className="mt-2 text-xs font-medium text-gray-600">338 STARTED</p>
              </div>
              <div className="text-center">
                <FaAt className="w-10 h-10 cursor-pointer mx-auto" />
                <p className="mt-2 text-xs font-medium text-gray-600">WORKING IN GOOGLE</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800  text-center mt-12 mb-4">ABOUT</h3>
            <p className="text-gray-600 text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
              odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
              adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </main>

      <footer className="mt-12 mx-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-28">
            <div>
              <img src=" " alt="Logo" className="mb-4" />
              <p className="text-sm text-gray-600">www.gbu.ac.in</p>
              <p className="text-sm text-gray-600">+977-12345678</p>
              <p className="text-sm text-gray-600">127 Chabahil, Kasna</p>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-4 text-gray-800">Our Services</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>CONNECT WITH CLASSMATE</li>
                <li>CONNECT WITH ALUMNI</li>
                <li>ALUMNI</li>
                <li>EVENTS</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold mb-4 text-gray-800">Take a Tour</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>HOME</li>
                <li>PRODUCTS</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
              </ul>
            </div>
            <div className='text-center mt-6'> 
            <button className='rounded-full text-black border border-black px-8 py-2 mb-6'>Explore</button>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaXTwitter className="w-5 h-5" /></a>
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaLinkedinIn className="w-5 h-5" /></a>
              <a href="#" className="text-blue-600 hover:text-blue-800"><FaMeta className="w-5 h-5" /></a>
            </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col md:flex-row justify-center">
            <p className="text-xs text-gray-500 mb-4 md:mb-0">Copyright © 2023 My Website name Pvt. Ltd. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlumniViewProfile;