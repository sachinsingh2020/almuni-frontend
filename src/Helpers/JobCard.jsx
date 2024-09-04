import React from 'react'
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {

    const navigate = useNavigate();

    const handleJobClicked = () => {
        navigate(`/job-details/${job._id}`);
    }
    return (
        job &&
        <div className="bg-gray-100 p-4 rounded-md mb-4">
            <h3 className="text-lg font-semibold text-blue-900">{job.jobTitle}</h3>
            <p className="text-gray-700">Location: {job.jobLocation}</p>
            <p>
                Skills:
                {job.skillsRequired.map((skill, index) => (
                    <span key={index} className="text-blue-700"> {skill},</span>
                ))}
            </p>
            <button
                onClick={handleJobClicked}
                className="mt-2 text-blue-700">View Details</button>
        </div>
    )
}

export default JobCard
