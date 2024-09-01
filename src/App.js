import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ProtectedRoute } from 'protected-route-react';
import FrontPage from './Components/FrontPage';
import StudentLogin from './Components/StudentLogin';
import StudentRegistration from './Components/StudentRegistration';
import StudentEditProfile from './Components/StudentEditProfile';
import StudentHomePage from './Components/StudentHomePage';
import { loadUser } from './redux/actions/user';
import AlumniViewProfile from './Components/AlumniViewProfile';
import StudentProfile from './Components/StudentProfile';
import JobSearch from './Components/JobSearch';

function App() {
  const { isAuthenticated, error } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
  }, [dispatch, error]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch])

  return (
    <Router>
      <Routes>
        <Route exact path="/student-login" element={
          <ProtectedRoute
            isAuthenticated={!isAuthenticated}
            redirect="/student-home"
          >
            <StudentLogin />
          </ProtectedRoute>} />

        <Route exact path='/jobsearch' element={<JobSearch />} />
        <Route exact path='/' element={<FrontPage />} />

        <Route exact path="/student-home" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/student-login"
          >
            <StudentHomePage />
          </ProtectedRoute>} />

        <Route exact path="/student-registration" element={
          <ProtectedRoute
            isAuthenticated={!isAuthenticated}
            redirect="/student-home"
          >
            <StudentRegistration />
          </ProtectedRoute>
        } />

        <Route exact path="/student-edit-profile" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/student-login"
          >
            <StudentEditProfile />
          </ProtectedRoute>} />

        <Route exact path="/alumni-profile" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/student-login"
          >
            <AlumniViewProfile />
          </ProtectedRoute>} />

        <Route exact path="/student-profile" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/student-login"
          >
            <StudentProfile />
          </ProtectedRoute>} />




      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;

