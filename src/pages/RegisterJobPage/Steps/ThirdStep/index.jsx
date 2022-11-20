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
        <div className="area-register-confirm">
          <ItemVaga job={currentJob} isClosed={false} showAllDetails={false} />
        </div>
      </div>
    </section>
  );
}

export default ThirdStep;


