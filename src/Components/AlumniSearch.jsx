import React, { useEffect, useState } from 'react';
import AlumniCard from '../Helpers/AlumniCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAlumnis } from '../redux/actions/alumni';
import Loader from '../Helpers/Loader';
import { useLocation } from 'react-router-dom';
import NotFound from '../Helpers/NotFound';
import Pagination from 'react-js-pagination';
import SearchAndFilter from '../Helpers/SearchAndFilter';

const AlumniSearch = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Extract parameters from the URL or set them to default values if not present
  const keyword = queryParams.get('keyword') || "";
  const graduationYear = queryParams.get('graduationYear') || null;
  const industry = queryParams.get('industry') || null;
  const fieldOfStudy = queryParams.get('fieldOfStudy') || null;

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log({ keyword, graduationYear, industry, fieldOfStudy });
    dispatch(getAllAlumnis(keyword, currentPage, graduationYear, industry, fieldOfStudy));
  }, [dispatch, keyword, currentPage, graduationYear, industry, fieldOfStudy]);

  const { alumnis, filteredAlumni, resultPerPage, filteredAlumniCount, loading } = useSelector(state => state.alumni);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  return (
    <div className="rounded-lg shadow-m px-20">
      <SearchAndFilter />
      <div
        className='w-full'
        style={{
          borderBottom: '5px solid black',
        }}
      />
      {
        loading ? (
          <Loader />
        ) : (
          filteredAlumni === 0 ? <NotFound /> :
            <>
              <div className='text-center mt-4 font-semibold text-xl'>
                Total Searches Found: {filteredAlumniCount}
              </div>
              <div className='flex justify-evenly flex-wrap'>
                {alumnis && alumnis.map((alumni) => (
                  <AlumniCard key={alumni.id} alumni={alumni} />
                ))}
              </div>
            </>
        )
      }
      <div>
        {
          resultPerPage < filteredAlumni && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={filteredAlumni}
                onChange={setCurrentPageNo}
                nextPageText={'Next'}
                prevPageText={'Previous'}
                firstPageText={"1st"}
                lastPageText={'Last'}
                itemClass="page-item"
                linkClass='page-link'
                activeClass='pageItemActive'
                activeLinkClass='pageLinkActive'
              />
            </div>
          )
        }
      </div>
    </div>
  );
};

export default AlumniSearch;
