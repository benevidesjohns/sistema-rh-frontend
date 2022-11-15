import { useNavigate } from 'react-router-dom';

import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

import './styles.css';
import api from '../../services/api';

import FirstStep from './Steps/FirstStep'
import SecondStep from './Steps/SecondStep'
import ThirdStep from './Steps/ThirdStep'

const JobPage = () => {
  const navigate = useNavigate();

  localStorage.setItem('job', JSON.stringify({
    title: "",
    description: "",
    requisites: {
      independente: 1,
      sociavel: 1,
      paciente: 1,
      vigilante: 1,
    }
  }));

  // Validators
  const firstStepValidator = () => {
    const job = JSON.parse(localStorage.getItem('job'));
    return job.title && job.description;
  }

  const secondStepValidator = () => {
    const sliders = document.getElementsByClassName('rangeslider rangeslider-horizontal');
    const sliderValues = [...sliders].map((slider) => Number(slider.ariaValueNow) / 50)

    const job = JSON.parse(localStorage.getItem('job'));
    localStorage.setItem('job', JSON.stringify({
      ...job, requisites: {
        independente: sliderValues[0],
        sociavel: sliderValues[1],
        paciente: sliderValues[2],
        vigilante: sliderValues[3],
      }
    }))

    return true;
  }

  const onFormSubmit = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');
    const job = JSON.parse(localStorage.getItem('job'));

    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.post(`users/${user.data.id}/vagas`, job)
      console.log("Created Job:", JSON.stringify(job));
      navigate('/jobs');
    } catch (error) {
      console.log("Erro:", error.response.data)
    }
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
