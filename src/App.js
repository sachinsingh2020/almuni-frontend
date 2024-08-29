import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ProtectedRoute } from 'protected-route-react';
import Home from './Components/Home';
import Login from './Components/Login';

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
        <Route exact path="/login" element={
          <ProtectedRoute
            isAuthenticated={!isAuthenticated}
            redirect="/"
          >
            <Login />
          </ProtectedRoute>} />

        <Route exact path="/" element={
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            redirect="/login"
          >
            <Home />
          </ProtectedRoute>} />

      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;

// sachin singh
