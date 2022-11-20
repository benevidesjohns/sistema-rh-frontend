import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';
import { CandidatesContext } from '../../contexts/candidates';
import { ROUTES } from '../../routes/paths'

import CandidatesTable from '../../components/candidates-table';
import Button from '../../components/button';

const JobCandidatesPage = () => {
  const navigate = useNavigate()

  const { list, updated, setUpdated, candidates } = useContext(CandidatesContext);
  const currentJob = JSON.parse(localStorage.getItem("currentJob"));

  useEffect(() => {
    if (!updated) {
      list();
      setUpdated(true);
    }
  }, []);

  const addCandidates = () => {
    navigate(ROUTES.JOB_CANDIDATES_ADD)
  }

  return (
    <section className='page'>
      <h1 className='title center page-title'>{currentJob.title}</h1>
      <div className='content'>

        <div className='job-candidates-details'>
          <div className='job-candidates-description'>
            <h1 className='section-title'>Descrição</h1>
            <p>{currentJob.description}</p>
          </div>
          <Button
            label='Adicionar Candidatos'
            event={addCandidates}
          />
        </div>

        <h1 className='section-title'>Candidatos a vaga de {currentJob.title}</h1>
        <div className='area-candidates-table'>
          <CandidatesTable candidates={candidates} />
        </div>

      </div>
    </section>
  );
}

export default JobCandidatesPage;
