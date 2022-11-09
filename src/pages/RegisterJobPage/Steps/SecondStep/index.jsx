import './styles.css'

import CustomSlider from '../../../../components/slider';

const SecondStep = () => {
  return (
    <section>
      <div className="step-area second-step-area">
        <h1 className='title' >Objetivo dos candidatos para a vaga</h1>
        <CustomSlider showLabels={true} enable={true} />
      </div>
    </section>
  );
}

export default SecondStep
