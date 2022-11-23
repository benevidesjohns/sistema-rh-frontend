import { useContext, useEffect, useState } from 'react';
import * as MdIcon from 'react-icons/md';

import './styles.css';
import { CandidatesContext } from '../../contexts/candidates';
import { ROUTES } from '../../routes/paths'

import TextIconButton from '../../components/text-icon-button';
import CandidatesTable from '../../components/candidates-table';
import EmptyPage from '../../components/empty-page';
import { JobsContext } from '../../contexts/jobs';

const JobCandidatesAddPage = () => {
  const { list, candidates } = useContext(CandidatesContext);
  const { listCandidates, candidates: jobCandidates } = useContext(JobsContext);
  const { addCandidates } = useContext(JobsContext);

  const [filteredCandidates, setFilteredCandidates] = useState([])
  const [candidatesList, setCandidatesList] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(async () => {
      if (!candidatesList) {
        await list()
        await listCandidates()

        const jobCandIndexes = jobCandidates.map(c => c.id)
        const filtCand = candidates.filter(candidate => {
          return jobCandIndexes.indexOf(candidate.id) == -1
        })

        console.log(filtCand)
        setFilteredCandidates(filtCand)
        setCandidatesList(true);
      }
      setLoading(false)
    }, 500);
  }, [candidatesList]);

  const gerarLink = () => {
    alert("Link copiado para a área de transferência");
  }

  const enviarEmail = async () => {
    // alert("Candidatos adicionados com sucesso!")
    await addCandidates();
  }

  return (
    <section className='page'>
      <h1 className='title center page-title'>Adicionar Candidatos</h1>
      <div className='content column gap'>
        <div className="area-link-candidate">
          <h1 className='title center section-title'>
            Enviar formulário para  os candidatos para a vaga de Designer
          </h1>
          <div className="area-button-link" >
            <TextIconButton
              leading={<MdIcon.MdAddLink />}
              title='Gerar Link'
              onClick={gerarLink}
            />
            <TextIconButton
              leading={<MdIcon.MdEmail />}
              title='Enviar e-mail'
              onClick={enviarEmail}
            />
          </div>
        </div>

        <div className="horizontal-separator"></div>

        <h1 className='title center section-title'>
          Selecione os candidatos para enviar o e-mail
        </h1>
        <div className={filteredCandidates.length === 0 ? 'area-empty' : 'row center'}>
          {filteredCandidates.length > 0
            ?
            !loading && <CandidatesTable candidates={filteredCandidates} />
            :
            !loading && <div className="area-empty-table">
              <EmptyPage
                title="Nenhum Candidato Cadastrado"
                label="Cadastrar Candidato"
                path={ROUTES.CREATE_CANDIDATE}
              />
            </div>
          }
        </div>
        {filteredCandidates.length > 0 && !loading &&
          <h1 className='title center component-title'>
            Quantidade de candidatos: {filteredCandidates.length}
          </h1>
        }
      </div>
    </section>
  );
}

export default JobCandidatesAddPage;
