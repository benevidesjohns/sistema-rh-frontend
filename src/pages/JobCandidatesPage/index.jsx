import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';
import { ROUTES } from '../../routes/paths'
import { JobsContext } from '../../contexts/jobs';

import CandidatesTable from '../../components/candidates-table';
import Button from '../../components/button';
import EmptyPage from '../../components/empty-page';
import CustomSlider from '../../components/slider';

const JobCandidatesPage = () => {
  const navigate = useNavigate()

  const { listCandidates, candidates } = useContext(JobsContext);
  const currentJob = JSON.parse(localStorage.getItem("currentJob"));
  const currentCandidate = JSON.parse(localStorage.getItem("currentCandidate"));

  const [currCandidate, setCurrCandidate] = useState({})
  const [candidatesList, setCandidatesList] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(async () => {
      if (!candidatesList) {
        await listCandidates()
        setCandidatesList(true);
      }
      setLoading(false)
    }, 500);
  }, [candidatesList]);

  useEffect(()=>{
    setCurrCandidate(currentCandidate);
  },[currentCandidate])

  return (
    <section className='page'>
      <h1 className='title center page-title'>{currentJob.title}</h1>
      <div className='content column'>

        <div className='content row btw'>
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

        <div className="content horizontal-separator"></div>

        <div>
          <h1 className='section-title'>Requisitos</h1>
          <div className='row'>
            <CustomSlider values={currentJob.requisites} />
            {/* <CustomSlider
              values={currCandidate ? currCandidate.requisites : currentJob.requisites}
            /> */}
          </div>
        </div>

        <h1 className='content row center section-title'>Candidatos atribuídos a vaga {currentJob.title}</h1>
        <div className='area-candidates-table'>
          <div className={candidates.length === 0 ? 'area-empty-table' : ''}>
            {candidates.length > 0
              ?
              !loading && <CandidatesTable candidates={candidates} all={true} />
              :
              !loading && <EmptyPage
                title="Nenhum Candidato Cadastrado"
              />
            }
          </div>
          {candidates.length > 0
            ?
            <h1 className='title component-title'>
              Quantidade de candidatos: {candidates.length}
            </h1>
            : ''
          }
        </div>

      </div>
    </section>
  );
}

export default JobCandidatesPage;
