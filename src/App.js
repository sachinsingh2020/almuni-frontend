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
  }, [])

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

        <Route exact path="/alumni-profile/:id" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/student-login"
          >
            <AlumniViewProfile />
          </ProtectedRoute>} />




      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;

