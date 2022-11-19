import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const res = await api.post('/auth', {
        email: email,
        password: password,
      });

      api.defaults.headers.authorization = `Bearer ${res.data.token}`

      const loggedUser = await api.get(`/users/${res.data.user.id}`)

      if (loggedUser) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(loggedUser));
        navigate('/dashboard');
      }
    } catch (error) {
      console.error("Error:", JSON.stringify(error.response.data))
    }
  };

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    navigate('/login');
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
      navigate('/login');
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
