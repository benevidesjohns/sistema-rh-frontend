import { useContext, useEffect } from 'react';

import './styles.css';
import { CandidatesContext } from '../../contexts/candidates'
import CandidatesTable from '../../components/candidates-table';
import ItemVaga from '../../components/item-vaga';

const CandidatesPage = () => {
  const { list, updated, setUpdated, candidates } = useContext(CandidatesContext);

  useEffect(() => {
    if (!updated) {
      list();
      setUpdated(true);
    }
  }, []);

  return (
    <section className='page'>
      <h1 className='title center page-title'>Candidatos</h1>
      <div className='content'>
        <ul className='candidates-list'>
          {
            candidates.map((candidate, index) => {
              return (
                <li key={index} className="card">
                  <div className='card-candidate-content'>
                    <h1 className='component-title'>{candidate.name}</h1>
                    <div className='row gap'>
                      <h3 className="description-font-green">Email: </h3>
                      <h3 className="description-bold" >{candidate.email}</h3>
                    </div>
                    <div className='row gap'>
                      <h3 className="description-font-green">Telefone: </h3>
                      <h3 className="description-bold" >{candidate.phone}</h3>
                    </div>
                  </div>

                  {/* <ItemVaga
                  job={{
                    title: candidate.name,
                    description: `${candidate.email}\n${candidate.phone}`,
                    requisites: {
                      independente: 2,
                      sociavel: 2,
                      paciente: 2,
                      vigilante: 2,
                    }
                  }}
                  showAllDetails={false}
                /> */}
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  );
}

export default CandidatesPage;
