import React from 'react';
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AlumniCard = ({ alumni }) => {
  return (
    <div className="max-w-[34rem] bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden flex mt-8 mx-1">
      <div className="relative w-2/5">
        <img
          className="w-full h-full object-cover"
          src={alumni.profilePic.url} // Replace with your image URL
          alt="Alumni"
        />
      </div>
      <div className="p-6 w-3/5">
        <div
          className='flex flex-col items-center justify-between'
        >
          <h2 className="text-2xl font-semibold">{alumni.firstName} {alumni.lastName}</h2>
          <p className="text-gray-400 text-[#ff9700]">{alumni.profession}</p>
        </div>

        <div
          className='flex flex-col items-center justify-between w-full'
        >
          <div
            className='flex flex-col items-center justify-between mt-3 font-bold w-1/2 text-center rounded-lg'
            style={{
              border: "2px solid #cf4f7b",
            }}
          >
            <div
            >
              <p>Graduated Year</p>
              <p>{alumni.graduationYear}</p>
            </div>
          </div>

          <Link to={`/alumni-profile/${alumni._id}`}
            className='w-3/4'
          >
            <button
              className="bg-[#1c865c] py-1.5 w-full rounded-lg font-semibold mt-3">
              Full Details
            </button>
          </Link>

        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">About</h3>
          <p className="text-gray-400">
            {alumni.firstName} {alumni.lastName} is graduated in {alumni.graduationYear} from Gautam Buddha University. He is now working in {alumni.industry} as a {alumni.profession}.
          </p>
        </div>
        <div>

        </div>
        <div className="mt-4 flex justify-evenly px-8">
          <a href={alumni.socialMedia.twitter} className="text-white text-3xl">
            <FaSquareTwitter />
          </a>
          <a href={alumni.socialMedia.linkedin} className="text-white text-3xl">
            <FaLinkedin />
          </a>
          <a href={alumni.socialMedia.instagram} className="text-white text-3xl">
            <FaInstagramSquare />
          </a>
          <a href={alumni.socialMedia.github} className="text-white text-3xl">
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
