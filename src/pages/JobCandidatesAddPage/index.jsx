import { useContext } from 'react';
import * as MdIcon from 'react-icons/md';

import './styles.css';
import { CandidatesContext } from '../../contexts/candidates';
import { ROUTES } from '../../routes/paths'

import TextIconButton from '../../components/text-icon-button';
import CandidatesTable from '../../components/candidates-table';
import EmptyPage from '../../components/empty-page';

const JobCandidatesAddPage = () => {
  const { candidates } = useContext(CandidatesContext);

  return (
    <section className='page'>
      <h1 className='title center page-title'>Adicionar Candidatos</h1>
      <div className='content'>
        <div className="area-link-candidate">
          <h1 className='title center component-title'>
            Enviar formulário para  os candidatos para a vaga de Designer
          </h1>
          <div className="area-button-link" >
            <TextIconButton
              leading={<MdIcon.MdAddLink />}
              title='Gerar Link'
              onClick={() => { }}
            />
            <TextIconButton
              leading={<MdIcon.MdEmail />}
              title='Enviar e-mail'
              onClick={() => { }}
            />
          </div>

          <div className="area-candidates-table">
            <h1 className='title center component-title'>
              Selecione os candidatos para enviar o e-mail
            </h1>
            {candidates.length > 0 ? <h1 className='title component-title'>Quantidade de candidatos: {candidates.length}</h1> : ''}
            <div className="area-empty-table">
              {candidates.length > 0
                ? <CandidatesTable candidates={candidates} />
                : <EmptyPage
                  title="Nenhum Candidato Cadastrado"
                  label="Cadastrar Candidato"
                  path={ROUTES.CREATE_CANDIDATE}
                />
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobCandidatesAddPage;
