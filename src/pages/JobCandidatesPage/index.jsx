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

  const [candidate, setCandidate] = useState({})
  const [updated, setUpdated] = useState(false)
  const [updatedCandidates, setUpdatedCandidates] = useState(false)
  const [loading, setLoading] = useState(true)

  // Atualiza a lista de candidatos da tabela
  useEffect(() => {
    setTimeout(async () => {
      if (!updatedCandidates) {
        await listCandidates()
        setUpdatedCandidates(true);
      }
      setLoading(false)
    }, 500);
  }, [updatedCandidates]);

  useEffect(() => {
    if (!updated) {
      let currentCandidate = JSON.parse(localStorage.getItem("currentCandidate"));
      setCandidate(currentCandidate);
      setUpdated(true);
    }
  }, [updated])

  const compareCandidate = (candidate) => {
    let currentCandidate = JSON.parse(localStorage.getItem("currentCandidate"));
    if (!currentCandidate || (currentCandidate.id !== candidate.id)) {
      localStorage.setItem("currentCandidate", JSON.stringify(candidate))
      setUpdated(false);
    }
  }

  return (
    <section className='page'>
      <h1 className='title center page-title'>{currentJob.title}</h1>
      <div className='content column area-job-candidates'>

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

        <div className="horizontal-separator"></div>

        <h1 className='section-title'>Requisitos</h1>
        <div className="area-inf-requirements">
          <div className='area-requirements'>
            <div className='row'>
              <CustomSlider
                values={currentJob.requisites}
                candidateValues={
                  candidate && updated &&
                  candidate.VagasCandidates.requisites
                }
              />
            </div>
          </div>
          <div className="area-inf-candidate-requirements">
            <div className="area-bolinha-de-golfe">
              <div className='bolinha-de-golfe'></div>
              <h1 className='component-title'>Requisitos da vaga</h1>
            </div>

            <div className="area-bolinha-de-golfe">
              <div className='bolinha-de-golfe red'></div>
              <h1 className='component-title'>Requisitos da candidato</h1>
            </div>

            <div className="horizontal-separator"></div>

            <h1 className='area-reference-requirements component-title'>
              {candidate
                ? `Comparando requisitos do candidato ${candidate.name}`
                : "Selecione um candidato para comparar"
              }
            </h1>
          </div>
        </div>

        <div className="horizontal-separator"></div>

        <h1 className='title center section-title'>
          Candidatos atribuídos a vaga {currentJob.title}
        </h1>
        <div className={candidates.length === 0 ? 'area-empty' : 'row center'}>
          {candidates.length > 0
            ? !loading &&
            <CandidatesTable
              all={true}
              candidates={candidates}
              onClickCompare={compareCandidate}
            />
            : !loading &&
            <div className="area-empty-table">
              <EmptyPage
                title="Nenhum Candidato Cadastrado"
              />
            </div>
          }
        </div>
        {candidates.length > 0 && !loading &&
          <h1 className='title center component-title'>
            Quantidade de candidatos: {candidates.length}
          </h1>
        }
      </div>
    </section>
  );
}

export default JobCandidatesPage;
