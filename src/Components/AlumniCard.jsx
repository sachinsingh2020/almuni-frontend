import { FaUserGraduate, FaBriefcase, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

function AlumniCard() {
  return (
    <div className="w-full md:w-1/3 h-auto my-10 shadow-xl p-6 bg-gradient-to-r from-blue-500 to-indigo-800 text-white font-semibold rounded-xl transform transition-all duration-300 relative overflow-hidden">
      {/* Alumni Name and Graduation Year */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center space-x-2">
          <FaUserGraduate size={15} />
          <h2>Alumni Name</h2>
        </div>
        <span className="text-lg">2025</span>
      </div>
      
      {/* Profession */}
      <div className="flex items-center space-x-2 mb-2">
        <FaBriefcase size={15} />
        <h4>Profession</h4>
      </div>

      {/* Job Location */}
      <div className="flex items-center space-x-2 mb-2">
        <FaMapMarkerAlt size={15} />
        <h4>Job Location</h4>
      </div>

      {/* Company Name */}
      <div className="flex items-center space-x-2">
        <FaBuilding size={15} />
        <h4>Company Name</h4>
      </div>
    </div>
  );
}

export default AlumniCard;
