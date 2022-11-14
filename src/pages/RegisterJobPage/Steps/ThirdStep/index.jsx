import * as MdIcon from 'react-icons/md';

import './styles.css'

import ButtonIcon from '../../../../components/button-icon';

const ThirdStep = () => {
  return (
    <section>
      <div className="step-area third-step-area">
        <h1 className='title section-title' >Link do formulário da vaga para os candidatos</h1>

        <div className="area-link-candidate">
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
        </div>
      </div>
    </section>
  );
}

export default ThirdStep;
