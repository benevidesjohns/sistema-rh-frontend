import React, { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';

import { ROUTES } from '../routes/paths'
import { CandidatesContext } from './candidates';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const { setCandidates } = useContext(CandidatesContext)

  const login = async (email, password) => {
    try {
      const res = await api.post('/auth', {
        email: email,
        password: password,
      });

      api.defaults.headers.authorization = `Bearer ${res.data.token}`

      const loggedUser = await api.get(`/users/${res.data.user.id}`)

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(loggedUser));
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      console.error("Error:", JSON.stringify(error.response.data))
    }
  };

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('job')
    localStorage.removeItem('currentJob')
    navigate(ROUTES.LOGIN);
  };

  const register = async (name, email, password, passwordConfirmation) => {
    try {
      const res = await api.post('/users', {
        name: name,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      });
      console.log("Registered User Successfully:", JSON.stringify(res.data));
      navigate(ROUTES.LOGIN);
    } catch (error) {
      console.error("Error:", error.response.data)
    }
  }

  return (
    <AuthContext.Provider
      value={{ login, logout, register }}
    >{children}</AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
