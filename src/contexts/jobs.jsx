import React, { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../services/api';
import { ROUTES } from '../routes/paths'

const JobsContext = createContext({});

const JobsProvider = ({ children }) => {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  const defaultJob = {
    title: "",
    description: "",
    requisites: {
      independente: 2,
      sociavel: 2,
      paciente: 2,
      vigilante: 2,
    }
  }

  const [updated, setUpdated] = useState(false)
  const [creatingJob, setCreatingJob] = useState(defaultJob);
  const [candidates, setCandidates] = useState([]);
  const [jobs, setJobs] = useState([]);

  // Processo de criação da vaga
  const updateCurrentJob = ({ title, description, values, requisites }) => {
    let updatedJob = {
      title: title,
      description: description,
      requisites: !values ? requisites : {
        independente: values[0],
        sociavel: values[1],
        paciente: values[2],
        vigilante: values[3],
      }
    };
    setCreatingJob(updatedJob);
    localStorage.setItem('job', JSON.stringify(updatedJob));
  }

  // Finalização do processo de criação da vaga
  const create = async () => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const res = await api.post(`users/${user.data.id}/vagas`, creatingJob)
      console.log("Created Job Successfully:", res.data);
      localStorage.removeItem('job')
      setCreatingJob(defaultJob)
      setUpdated(false)
      navigate(ROUTES.JOB_CANDIDATES_ADD);
    } catch (error) {
      console.error("Error:", error.response.data)
    }
  }

  // Adiciona um ou mais candidatos a uma vaga
  const addCandidates = async () => {
    let currentJob = JSON.parse(localStorage.getItem("currentJob"));
    let candidates = JSON.parse(localStorage.getItem("selectedCandidates"))
    await candidates.map(async (candidate) => {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const res = await api.post(
          `users/${user.data.id}/vagas/${currentJob.id}/candidates`,
          {candidateId: candidate.id}
        );
        console.log(`Added Candidate ${candidate.id} Successfully:`, res.data);
      } catch (error) {
        console.error("Error:", error.response.data)
      }
    })
    localStorage.removeItem('selectedCandidates');
    navigate(ROUTES.JOB_CANDIDATES);
  }

  // Listagem das vagas cadastradas
  const list = async () => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const res = await api.get(`users/${user.data.id}/vagas/`);
      setJobs(res.data);
    } catch (error) {
      console.error("Error:", error.response.data)
    }
  }

  const listCandidates = async () => {
    try {
      let currentJob = JSON.parse(localStorage.getItem("currentJob"));

      api.defaults.headers.authorization = `Bearer ${token}`;
      const result = await api.get(
        `users/${user.data.id}/vagas/${currentJob.id}/candidates`
      );

      setCandidates(result.data);
    } catch (error) {
      console.error("Error:", error.response.data)
    }
  }

  return (
    <JobsContext.Provider
      value={{
        jobs,
        candidates,
        creatingJob,
        updated,
        addCandidates,
        setUpdated,
        updateCurrentJob,
        listCandidates,
        list,
        create
      }}
    >{children}</JobsContext.Provider>
  );
}

export { JobsProvider, JobsContext };
