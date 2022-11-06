import React, { useContext } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import RegisterPage from "./pages/RegisterPage";
import RegisterJobPage from "./pages/RegisterJobPage";
import RegisterCandidatePage from "./pages/RegisterCandidatePage";
import ConfigPage from "./pages/ConfigPage";
import ReviewCandidatesPage from "./pages/ReviewCandidatesPage";

import { AuthProvider, AuthContext } from './contexts/auth';

const AppRoutes = () => {

  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      console.log('loading...');
      return <div className="loading">Loading...</div>;
    }

    if (!authenticated) {
      console.log('not authenticated');
      return <Navigate to='/login' />
    }

    console.log('authenticated: ', String(authenticated));
    return children;
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register-job" element={<RegisterJobPage />} />
          <Route path="/register-candidates" element={<RegisterCandidatePage />} />
          <Route path="/review-candidates" element={<ReviewCandidatesPage />} />
          <Route path="/config" element={<ConfigPage />} />
          <Route path="/dashboard" element={<Private><DashboardPage /></Private>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
