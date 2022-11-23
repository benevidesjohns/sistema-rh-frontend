import React from 'react';
import Popup from 'reactjs-popup';
import './styles.css';
import 'reactjs-popup/dist/index.css';

const MiniPopup = ({ content, label, submit }) => {

  const onSubmit = (event, close) => {
    close();
    submit(event);
  }

  return (
    <Popup
      trigger={<button className="button">{label}</button>}
      modal
    >{close => (
      <div className='modal'>
        <button className="close" onClick={close} >&times;</button>
        <div className="title center section-title">Cadastro realizado</div>
        <div className='title center content'>
          <p>
            Candidato cadastrado com sucesso!
          </p>
        </div>
        <div className="actions">
          <button className="button" onClick={(e) => onSubmit(e, close)}>
            Confirmar
          </button>
        </div>
      </div>
    )}
    </Popup>
  )
}

export default MiniPopup;
