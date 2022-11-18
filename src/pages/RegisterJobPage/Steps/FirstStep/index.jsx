import { useContext, useState } from "react";

import './styles.css';

import Input from "../../../../components/input";
import { JobsContext } from "../../../../contexts/jobs";

const FirstStep = () => {
  const { currentJob, updateCurrentJob } = useContext(JobsContext)

  const [title, setTitle] = useState(currentJob.title);
  const [description, setDescription] = useState(currentJob.description);

  const changeTitle = (inputTitle) => {
    setTitle(inputTitle.target.value);
    updateCurrentJob({ ...currentJob, title: inputTitle.target.value })
  };

  const changeDescription = (inputDescription) => {
    setDescription(inputDescription.target.value);
    updateCurrentJob({ ...currentJob, description: inputDescription.target.value })
  };

  return (
    <section>
      <div className="step-area first-step-area">
        <h1 className='title section-title' >Escolha um título e uma descrição para a vaga</h1>
        <div className="area-form">
          <div className="form">
            <Input
              id={0}
              value={title}
              label='Título da vaga'
              typeInput='text'
              onChange={changeTitle}
            />
            <Input
              id={1}
              value={description}
              label='Descrição da vaga'
              typeInput='text'
              onChange={changeDescription}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstStep;
