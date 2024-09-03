import React, { useEffect } from 'react';
import AlumniNavbar from '../../Helpers/AlumniNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../redux/actions/job';
import Loader from '../../Helpers/Loader';
import JobCard from '../../Helpers/JobCard';
import toast from 'react-hot-toast';
import JobFilterSection from '../../Helpers/JobFilterSection';
import { useLocation } from 'react-router-dom';

const JobPortal = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const { loading, message, error, filteredJobs, resultPerPage, filteredJobsCount, reversedJobs } = useSelector(state => state.job);

    // useEffect(() => {
    //     console.log({ filteredJobs, resultPerPage, filteredJobsCount, reversedJobs });
    // }, [filteredJobs, resultPerPage, filteredJobsCount, reversedJobs]);

    useEffect(() => {
        // Parse query parameters
        const searchParams = new URLSearchParams(location.search);

        const filters = {
            keyword: searchParams.get('keyword') || '',
            location: searchParams.get('location') || '',
            skills: searchParams.get('skills') ? searchParams.get('skills').split(', ') : []
        };

        // Dispatch action to get all jobs with the filters
        dispatch(getAllJobs(filters));
    }, [dispatch, location.search]);

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
        !reversedJobs ? <Loader /> :
            <div>
                <AlumniNavbar />
                <div className="flex px-20 py-6">
                    {/* Filters Section */}
                    <JobFilterSection />

                    {/* Job Listings Section */}
                    <section className="w-3/4">
                        <div className="bg-white shadow-lg p-4 rounded-md">
                            <h2 className="text-xl font-semibold mb-4">Available Jobs</h2>

                            {
                                !loading && reversedJobs ?
                                    reversedJobs?.map(job => (
                                        <JobCard key={job._id} job={job} />
                                    )) : <Loader />
                            }

                            {/* More job cards can be added here */}
                        </div>
                    </section>
                </div>
            </div>
    );
}

export default JobPortal;
