import { useContext, useEffect, useState } from 'react';
import * as MdIcon from 'react-icons/md';

import './styles.css';
import { CandidatesContext } from '../../contexts/candidates'
import { ROUTES } from '../../routes/paths'

import CardItem from '../../components/card-item';
import IconButton from '../../components/icon-button';
import EmptyPage from '../../components/empty-page';

const CandidatesPage = () => {
  const {
    list,
    candidates,
    deleteCandidate
  } = useContext(CandidatesContext);

  const [candidatesList, setCandidatesList] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(async () => {
      if (!candidatesList) {
        await list()
        setCandidatesList(true);
      }
      setLoading(false)
    }, 500);
  }, [candidatesList]);

  const onClickDelete = async ({ id }) => {
    await deleteCandidate({ id: id });
    setCandidatesList(false);
    console.log("Deleted candidate", id);
  }

  const CandidatesList = () => {
    return (
      <ul className='candidates-list'>
        {
          candidates.map((candidate, index) => {
            return (
              <div key={index} className="column c-center gap">
                <CardItem
                  title={candidate.name}
                  infos={[
                    { key: "Email:", value: candidate.email },
                    { key: "Telefone:", value: candidate.phone },
                  ]}
                  trailing={
                    <div className='column c-center'>
                      <IconButton
                        icon={<MdIcon.MdDelete />}
                        onClick={() => onClickDelete({ id: candidate.id })}
                      />
                    </div>
                  }
                />
                <div className='horizontal-separator'></div>
              </div>
            )
          })
        }
      </ul>
    );
  }

  return (
    <section className='page'>
      <h1 className='title center page-title'>Candidatos</h1>
      <div className='content'>{
        candidates.length > 0
          ?
          !loading && <CandidatesList />
          :
          !loading && <EmptyPage
            title="Nenhum Candidato Cadastrado"
            label="Cadastrar Candidato"
            path={ROUTES.CREATE_CANDIDATE}
          />

      }</div>
    </section>
  );
}


export default CandidatesPage;
