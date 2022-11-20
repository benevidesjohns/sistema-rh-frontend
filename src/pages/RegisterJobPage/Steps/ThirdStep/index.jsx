import './styles.css'

import CardItem from '../../../../components/card-item';
import CustomSlider from '../../../../components/slider';

const ThirdStep = () => {
  const currentJob = JSON.parse(localStorage.getItem('job'));

  return (
    <section>
      <div className="step-area third-step-area">
        <h1 className='title section-title' >Confirmar cadastro da vaga</h1>
        <div className="area-register-confirm">
          <h3 className='component-title'>Informações gerais</h3>
          <CardItem
            title={currentJob.title}
            description={currentJob.description}
          />
          <h3 className='component-title'>Requisitos</h3>
          <CustomSlider values={currentJob.requisites} />
        </div>
      </div>
    </section>
  );
}

export default ThirdStep;


