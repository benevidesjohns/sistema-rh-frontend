import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './styles.css';
import api from '../../services/api';

import Button from '../../components/button';

const JobPage = () => {

  const navigate = useNavigate();
  const [jobs, setJobs] = useState([])

  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${token}`
    api.get(`users/${user.data.id}/vagas`).then((res) => setJobs(res.data))
    console.log(jobs);
  }, [])


  return (
    <section className='page'>
      <section className='content'>
        <h1 className='title'>Vagas</h1>
        <ul className='jobs-list'>
          {
            jobs.map((job) => {
              return (
                <li key={job.id}>
                  <p>{job.title}</p>
                  <p>{job.description}</p>
                  <p>
                    Requisitos:
                    {job.requisites.independente}
                    {job.requisites.paciente}
                    {job.requisites.sociavel}
                    {job.requisites.vigilante}
                  </p>
                </li>
              )
            })
          }
        </ul>
        <Button label="Criar Vaga" event={() => navigate('/jobs/create')} />
      </section>
    </section>
  );
}

export default JobPage;
