import { useState } from "react";

import './styles.css';

import Input from "../../../../components/input";

const FirstStep = () => {

  const job = JSON.parse(localStorage.getItem('job'))

  const [title, setTitle] = useState(job.title);
  const [description, setDescription] = useState(job.description);

  const changeTitle = (title) => {
    setTitle(title.target.value);
    const job = JSON.parse(localStorage.getItem('job'))
    localStorage.setItem(
      'job',
      JSON.stringify({ ...job, title: title.target.value })
    )
  };

  const changeDescription = (description) => {
    setDescription(description.target.value);
    const job = JSON.parse(localStorage.getItem('job'))
    localStorage.setItem(
      'job',
      JSON.stringify({ ...job, description: description.target.value })
    )
  };

  return (
    <section>
      <div className="step-area first-step-area">
        <h1 className='title section-title' >Escolha um título de uma descrição para a vaga</h1>
        <div className="area-form">
          <div className="form">
            <Input
              value={title}
              label='Título da vaga'
              typeInput='title-job'
              onChange={changeTitle}
            />
            <Input
              value={description}
              label='Descrição da vaga'
              typeInput='description-job'
              onChange={changeDescription}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstStep;
