import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

import Button from '../../components/button'
import CustomSlider from '../slider';
import ButtonIcon from '../button-icon';
import * as MdIcon from 'react-icons/md';

const ItemVaga = ({ job, isClosed = false }) => {

  const navigate = useNavigate();

  const [showRequisites, setShowRequisites] = useState(false);

  const toggleRequisites = () => {
    console.log(job.requisites)
    setShowRequisites(!showRequisites);
  }

  return (
    <li className='content-job'>
      <div className="content-job-detail">
        <div className="area-details">

          <div className="area-title-description">
            <h1 className='component-title'>{job.title}</h1>
            <h3 className='description-font description-job'>{job.id}</h3>
            <div className='opening-date-job'>
              <h3 className="description-font-green">Data de Abertura: </h3>
              <h3 className="description-bold" >
                {new Date(job.createdAt).toLocaleDateString('pt-BR', {
                  day: "2-digit",
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </h3>
            </div>
          </div>

          <div className='area-status'>
            <div className={`content-status status-${isClosed ? "close" : "open"}`}>
              <h1 className="description-font-green">{isClosed ? 'Fechado' : 'Aberto'}</h1>
            </div>
          </div>

        </div>

        <ButtonIcon
          title={`${showRequisites ? "Esconder" : "Exibir"} Requisitos`}
          onClick={toggleRequisites}
          trailing={showRequisites ? <MdIcon.MdArrowDropUp /> : <MdIcon.MdArrowDropDown />}
        />

        {showRequisites && <CustomSlider values={job.requisites} />}

      </div>

      <div className="area-candidates">
        <h1 className='title component-title'>Candidatos</h1>
        <h1 className='description-bold candidates-count'>5</h1>
        <Button label='Visualizar candidatos' event={() => navigate('/candidates/view')}/>
      </div>

    </li>
  );
}

export default ItemVaga;
