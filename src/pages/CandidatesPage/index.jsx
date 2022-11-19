import { useContext, useEffect } from 'react';

import './styles.css';
import { CandidatesContext } from '../../contexts/candidates'

const CandidatesPage = () => {
  const { list, updated, setUpdated, candidates } = useContext(CandidatesContext);

  useEffect(() => {
    if (!updated) {
      list();
      setUpdated(true);
    }
  }, []);

  const candidatesList = candidates.map((candidate) => {
    return (
      <li key={candidate.id}>
        <h1 className='section-title'>{candidate.name}</h1>
        <br />
        <p>{candidate.email}</p>
        <br />
        <p>{candidate.phone}</p>
        <br />
        <p>{candidate.vagas.toString()}</p>
      </li>
    );
  });

  return (
    <section className='page'>
      <h1 className='title center page-title'>Revisar Candidatos</h1>
      <div className='content'>
        <ul className='candidates-list'>
          {candidatesList}
        </ul>
      </div>
    </section>
  );
}

export default CandidatesPage;
