import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';
import { ROUTES } from '../../routes/paths'

import Button from '../../components/button'
import CustomSlider from '../slider';
import TextIconButton from '../text-icon-button';
import * as MdIcon from 'react-icons/md';
import CardItem from '../card-item';
import { JobsContext } from '../../contexts/jobs';

const ItemVaga = ({ job }) => {
  const navigate = useNavigate();

  const [showRequisites, setShowRequisites] = useState(false);

  const toggleRequisites = () => {
    setShowRequisites(!showRequisites);
  }

  const showJobCandidates = () => {
    localStorage.setItem("currentJob", JSON.stringify(job));
    navigate(ROUTES.JOB_CANDIDATES);
  }

  return (
    <li className='content-job'>
      <div className="content-job-detail">
        <CardItem
          title={job.title}
          description={job.description}
          infos={[{
            key: "Data de Abertura:",
            value: new Date(job.createdAt).toLocaleDateString('pt-BR', {
              dateStyle: 'full'
            })
          }]}
          trailing={
            <div className='column c-center'>
              <div className={`content-status status-${job.open ? "open" : "close"}`}>
                <h1 className="description-font-green">{job.open ? 'Aberto' : 'Fechado'}</h1>
              </div>
            </div>
          }
        />

        <TextIconButton
          title={`${showRequisites ? "Esconder" : "Exibir"} Requisitos`}
          onClick={toggleRequisites}
          trailing={showRequisites ? <MdIcon.MdArrowDropUp /> : <MdIcon.MdArrowDropDown />}
        />

        {showRequisites && <CustomSlider values={job.requisites} />}

      </div>

      <div className="area-candidates">
        <h1 className='title component-title'>Candidatos</h1>
        <h1 className='description-bold candidates-count'>{job.candidates.length}</h1>
        <Button
          label='Visualizar Candidatos'
          event={showJobCandidates}
        />
      </div>

    </li>
  );
}

export default ItemVaga;
