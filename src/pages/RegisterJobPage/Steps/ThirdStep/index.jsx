import * as MdIcon from 'react-icons/md';

import './styles.css'

import ButtonIcon from '../../../../components/button-icon';
import { useContext } from 'react';
import { CandidatesContext } from '../../../../contexts/candidates';

import ItemVaga from '../../../../components/item-vaga';

const ThirdStep = () => {
  const { candidates } = useContext(CandidatesContext);

  const currentJob = JSON.parse(localStorage.getItem('job'));

  return (
    <section>
      <div className="step-area third-step-area">
        <h1 className='title section-title' >Confirmar cadastro da vaga</h1>
        <ItemVaga job={currentJob} isClosed={false} showAllDetails={false} />
      </div>
    </section>
  );
}

export default ThirdStep;

{/* <div className="area-link-candidate">
          <div className="area-button-link" >
            <ButtonIcon
              leading={<MdIcon.MdAddLink />}
              title='Gerar Link'
              onClick={() => { }}
            />
            <ButtonIcon
              leading={<MdIcon.MdEmail />}
              title='Enviar e-mail'
              onClick={() => { }}
            />
          </div>

          <ul className='candidates-table'>
            {candidates.map((candidate) => {
              return (
                <li key={candidate.id}>
                  <h1 className='content-title'>{candidate.name}</h1>
                  <p>{candidate.email}</p>
                  <p>{candidate.phone}</p>
                  <p>{candidate.vagas.toString()}</p>
                </li>
              );
            })}
          </ul>
        </div> */}
