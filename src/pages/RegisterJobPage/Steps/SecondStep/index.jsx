import './styles.css'

import CustomSlider from '../../../../components/slider';
import { useContext } from 'react';
import { JobsContext } from '../../../../contexts/jobs';

const SecondStep = () => {

  const { currentJob } = useContext(JobsContext);

  return (
    <div className="step-area second-step-area">
      <h1 className='title section-title' >Objetivo dos candidatos para a vaga</h1>
      <CustomSlider showLabels={true} enable={true} values={currentJob.requisites} />
    </div>
  );
}

export default SecondStep
