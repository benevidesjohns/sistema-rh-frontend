import { useNavigate } from 'react-router-dom';

import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

import './styles.css';

import FirstStep from './Steps/FirstStep'
import SecondStep from './Steps/SecondStep'
import ThirdStep from './Steps/ThirdStep'

const JobPage = () => {
  const navigate = useNavigate();

  function onFormSubmit() {
    navigate('/jobs');
  }

  return (
    <section className='page'>
      <h1 className='title center page-title'>Criar Vaga</h1>
      <div className='content'>
        <div className="step-progress">
          <StepProgressBar
            startingStep={0}
            onSubmit={onFormSubmit}
            steps={[
              {
                label: 'Informações gerais',
                name: 'Etapa 1',
                content: <FirstStep />,
                // validator: step1Validator
              },
              {
                label: 'Objetivos',
                name: 'Etapa 2',
                content: <SecondStep />,
                // validator: step2Validator
              },
              {
                label: 'Link',
                name: 'Etapa 3',
                content: <ThirdStep />,
                // validator: step3Validator
              }
            ]}
            previousBtnName="Voltar"
            nextBtnName="Avançar"
            submitBtnName='Finalizar'
          />
        </div>
      </div>
    </section>
  );
}

export default JobPage;
