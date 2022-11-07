import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user');

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {

    const res = await api.post('/auth', {
      email: email,
      password: password,
    });

    // if(res.status == 401 || res.status == 404){
    //   console.log(res.data.erro)
    //   return
    // }

    console.log(res.data);
    api.defaults.headers.authorization = `Bearer ${res.data.token}`

    const loggedUser = await api.get(`/users/${res.data.user.id}`)

    if (loggedUser) {
      localStorage.setItem('user', JSON.stringify(loggedUser));
      setUser(loggedUser);
      navigate('/dashboard');
    }
  };

  const logout = () => {
    console.log('logout');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>{children}</AuthContext.Provider>
  );
}
