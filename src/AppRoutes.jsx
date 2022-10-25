import React, { useState, useContext } from 'react';
import './styles/global.css'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

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
      return <Navigate to='/' />
    }

    console.log('authenticated: ', String(authenticated));
    return children;
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/dashboard" element={<Private><DashboardPage /></Private>} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
