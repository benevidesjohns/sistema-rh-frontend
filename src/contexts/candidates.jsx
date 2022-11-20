import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';
import { ROUTES } from '../routes/paths'

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
      navigate(ROUTES.CANDIDATES);
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

  // Deleta um candidato
  const deleteCandidate = async ({ id }) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.delete(`users/${user.data.id}/candidates/${id}`);
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
        deleteCandidate,
        list,
        create
      }}
    >{children}</CandidatesContext.Provider>
  );
}

export { CandidatesProvider, CandidatesContext };
