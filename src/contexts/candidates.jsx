import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';

const CandidatesContext = createContext({});

const CandidatesProvider = ({ children }) => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  const [updated, setUpdated] = useState(false)
  const [candidates, setCandidates] = useState([]);

  // Cria o candidato
  const create = async ({ name, email, phone }) => {
    try {
      const candidate = { name, email, phone };
      api.defaults.headers.authorization = `Bearer ${token}`;
      const res = await api.post(`users/${user.data.id}/candidates`, candidate)

      console.log("Created Candidate Successfully:", res.data);
      setUpdated(false)
      navigate('/candidates/review');
    } catch (error) {
      console.error("Error:", error.response.data)
    }
  }

  // Listagem dos candidatos cadastrados
  const list = async () => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const res = await api.get(`users/${user.data.id}/candidates`);
      setCandidates(res.data);
    } catch (error) {
      console.error("Error:", error.response.data)
    }
  }

  return (
    <CandidatesContext.Provider
      value={{
        candidates,
        updated,
        setUpdated,
        list,
        create
      }}
    >{children}</CandidatesContext.Provider>
  );
}

export { CandidatesProvider, CandidatesContext };
