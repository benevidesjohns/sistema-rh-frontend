import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './styles.css';
import api from '../../services/api';

import CustomSlider from '../../components/slider';

const JobPage = () => {

  const navigate = useNavigate();
  const [jobs, setJobs] = useState([])

  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${token}`
    api.get(`users/${user.data.id}/vagas`).then((res) => setJobs(res.data))
  }, [])

  return (
    <section className='page'>
      <h1 className='title center page-title'>Vagas</h1>
      <div className='content'>
        <ul className='jobs-list'>
          {
            jobs.map((job) => {
              return (
                <li key={job.id}>
                  <p>{job.title}</p>
                  <p>{job.description}</p>
                  <p>
                    Requisitos:
                  </p>
                  <CustomSlider values={job.requisites} />
                  <br />
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  );
}

export default JobPage;
