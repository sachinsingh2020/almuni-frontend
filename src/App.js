import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ProtectedRoute } from 'protected-route-react';
import FrontPage from './Components/FrontPage';
import StudentLogin from './Components/Student/StudentLogin';
import StudentRegistration from './Components/Student/StudentRegistration';
import StudentEditProfile from './Components/Student/StudentEditProfile';
import StudentHomePage from './Components/Student/StudentHomePage';
import { loadUser } from './redux/actions/user';
import AlumniViewProfile from './Components/Alumni/AlumniViewProfile';
import StudentProfile from './Components/Student/StudentProfile';
import AlumniSearch from './Components/Alumni/AlumniSearch';
import AlumniLogin from './Components/Alumni/AlumniLogin';
import AlumniRegistration from './Components/Alumni/AlumniRegistration';
import AlumniHomePage from './Components/Alumni/AlumniHomePage';
import { loadAlumniDetails } from './redux/actions/alumni';
import AlumniJobPost from './Components/Alumni/AlumniJobPost';
import AlumniMyProfile from './Components/Alumni/AlumniMyProfile';
import JobPortal from './Components/JobPortal/JobPortal';

function App() {

  const { isAuthenticated, error } = useSelector(state => state.user);
  const { isAlumniAuthenticated, alumniError } = useSelector(state => state.alumni);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (alumniError) {
      toast.error(alumniError);
      dispatch({ type: 'clearError' });
    }
  }, [dispatch, error, alumniError]);

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadAlumniDetails());
  }, [dispatch])

  return (
    <Router>
      <Routes>
        {/* student login route  */}
        <Route exact path="/student-login" element={
          <ProtectedRoute
            isAuthenticated={!isAuthenticated}
            redirect="/student-home"
          >
            <StudentLogin />
          </ProtectedRoute>} />

        {/* alumni login route  */}
        <Route exact path="/alumni-login" element={
          <ProtectedRoute
            isAuthenticated={!isAlumniAuthenticated}
            redirect="/alumni-home"
          >
            <AlumniLogin />
          </ProtectedRoute>} />

        <Route exact path='/' element={<FrontPage />} />

        {/* student home route  */}
        <Route exact path="/student-home" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/student-login"
          >
            <StudentHomePage />
          </ProtectedRoute>} />

        {/* alumni home route  */}
        <Route exact path="/alumni-home" element={
          <ProtectedRoute
            isAuthenticated={isAlumniAuthenticated}
            redirect="/alumni-login"
          >
            <AlumniHomePage />
          </ProtectedRoute>} />

        {/* student registration route  */}
        <Route exact path="/student-registration" element={
          <ProtectedRoute
            isAuthenticated={!isAuthenticated}
            redirect="/student-home"
          >
            <StudentRegistration />
          </ProtectedRoute>
        } />

        {/* alumni registration  */}
        <Route exact path="/alumni-registration" element={
          <ProtectedRoute
            isAuthenticated={!isAlumniAuthenticated}
            redirect="/alumni-home"
          >
            <AlumniRegistration />
          </ProtectedRoute>
        } />

        {/* student edit profile route  */}
        <Route exact path="/student-edit-profile" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/student-login"
          >
            <StudentEditProfile />
          </ProtectedRoute>} />

        {/* Alumni post a job route  */}
        <Route exact path="/job-post" element={
          <ProtectedRoute
            isAuthenticated={isAlumniAuthenticated}
            redirect="/alumni-login"
          >
            <AlumniJobPost />
          </ProtectedRoute>} />

        <Route exact path="/alumni-profile" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/student-login"
          >
            <AlumniViewProfile />
          </ProtectedRoute>} />

        <Route exact path="/alumni-search" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/student-login"
          >
            <AlumniSearch />
          </ProtectedRoute>} />

        <Route exact path="/alumni-search/:keyword" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/student-login"
          >
            <AlumniSearch />
          </ProtectedRoute>} />

        <Route exact path="/student-profile" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/student-login"
          >
            <StudentProfile />
          </ProtectedRoute>} />

        {/* alumni profile by id route  */}
        <Route exact path="/alumni-profile/:id" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/student-login"
          >
            <AlumniViewProfile />
          </ProtectedRoute>} />

        {/* alumni my profile route  */}
        <Route exact path="/my-alumni-profile" element={
          <ProtectedRoute
            isAuthenticated={isAlumniAuthenticated}
            redirect="/alumni-login"
          >
            <AlumniMyProfile />
          </ProtectedRoute>} />

        {/* job portal page */}
        <Route exact path="/job-portal" element={
          <ProtectedRoute
            isAuthenticated={isAlumniAuthenticated || isAuthenticated}
            redirect="/"
          >
            <JobPortal />
          </ProtectedRoute>} />




      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;

