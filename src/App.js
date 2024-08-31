import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ProtectedRoute } from 'protected-route-react';
import Home from './Components/Home';
import FrontPage from './Components/FrontPage';
import StudentLogin from './Components/StudentLogin';
import StudentRegistration from './Components/StudentRegistration';

function App() {
  const { isAuthenticated, error } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
  }, [dispatch, error]);

  return (
    <Router>
      <Routes>
        <Route exact path="/student-login" element={
          <ProtectedRoute
            isAuthenticated={!isAuthenticated}
            redirect="/home"
          >
            <StudentLogin />
          </ProtectedRoute>} />

        <Route exact path="/" element={<FrontPage />} />

        <Route exact path="/home" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/login"
          >
            <Home />
          </ProtectedRoute>} />

        <Route exact path="/student-registration" element={
          <ProtectedRoute
            isAuthenticated={!isAuthenticated}
            redirect="/login"
          >
            <StudentRegistration />
          </ProtectedRoute>} />


      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;

// sachin singh
