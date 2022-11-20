import './styles.css';

import * as MdIcon from 'react-icons/md';
import ButtonIcon from '../../components/button-icon';
import { useContext } from 'react';
import { CandidatesContext } from '../../contexts/candidates';
import CandidatesTable from '../../components/candidates-table';

const JobCandidatesAddPage = () => {
  const { candidates } = useContext(CandidatesContext);

  return (
    <section className='page'>
      <h1 className='title center page-title'>Adicionar Candidatos</h1>
      <div className='content'>
        <div className="area-link-candidate">
        <h1 className='title center component-title'>Enviar formulário para  os candidatos para a vaga de Designer</h1>
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

          <div className="area-candidates-table">
            <h1 className='title center component-title'>Selecione os candidatos para enviar o e-mail</h1>
            <CandidatesTable candidates={candidates} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobCandidatesAddPage;
