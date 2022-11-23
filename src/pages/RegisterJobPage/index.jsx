import { useContext } from 'react';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

import './styles.css';
import { JobsContext } from '../../contexts/jobs';

import FirstStep from './Steps/FirstStep'
import SecondStep from './Steps/SecondStep'
import ThirdStep from './Steps/ThirdStep'

const RegisterJobPage = () => {
  const { create, updateCurrentJob } = useContext(JobsContext)

  // Validators
  const firstStepValidator = () => {
    const currentJob = JSON.parse(localStorage.getItem('job'));

    console.log("First Step:", currentJob);
    return currentJob.title && currentJob.description;
  }

  const secondStepValidator = () => {
    const sliders = document.getElementsByClassName('rangeslider rangeslider-horizontal');
    const requisites = [...sliders].map((slider) => Number(slider.ariaValueNow) / 25)

    const currentJob = JSON.parse(localStorage.getItem('job'));
    const updatedJob = {...currentJob, values: requisites}
    updateCurrentJob(updatedJob);

    console.log("Second Step:", updatedJob.values);
    return true;
  }

  const onFormSubmit = async () => {
    await create();
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
                validator: firstStepValidator
              },
              {
                label: 'Objetivos',
                name: 'Etapa 2',
                content: <SecondStep />,
                validator: secondStepValidator
              },
              {
                label: 'Confirmar',
                name: 'Etapa 3',
                content: <ThirdStep />,
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

export default RegisterJobPage;
