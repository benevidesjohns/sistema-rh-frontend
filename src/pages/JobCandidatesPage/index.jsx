import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';
import { CandidatesContext } from '../../contexts/candidates';
import { ROUTES } from '../../routes/paths'

import CandidatesTable from '../../components/candidates-table';
import Button from '../../components/button';

import EmptyPage from '../../components/empty-page';

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

  return (
    <section className='page'>
      <h1 className='title center page-title'>{currentJob.title}</h1>
      <div className='content column'>

        <div className='row btw'>
          <div className='job-candidates-description'>
            <h1 className='section-title'>Descrição</h1>
            <p>{currentJob.description}</p>
          </div>
          <div>
            <Button
              label='Adicionar Candidatos'
              event={() => navigate(ROUTES.JOB_CANDIDATES_ADD)}
            />
          </div>
        </div>

        <h1 className='section-title'>Candidatos atribuídos a vaga {currentJob.title}</h1>
        <div className='area-candidates-table'>
          {candidates.length > 0
            ?
            <h1 className='title component-title'>
              Quantidade de candidatos: {candidates.length}
            </h1>
            : ''
          }
          <div className="area-empty-table">
            {candidates.length > 0
              ?
              <CandidatesTable candidates={candidates} />
              :
              <EmptyPage
                title="Nenhum Candidato Cadastrado"
              />
            }
          </div>
        </div>

      </div>
    </section>
  );
}

export default JobCandidatesPage;
