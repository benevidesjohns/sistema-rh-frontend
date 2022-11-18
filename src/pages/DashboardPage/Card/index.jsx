import './styles.css'

import Button from '../../../components/button';
import ButtonIcon from '../../../components/button-icon';

import * as MdIcon from 'react-icons/md';

const PendingReviews = () => {
  return (
    <div className="area-pending-jobs">

      <div className="pending-job">
        <MdIcon.MdPerson />
        <p>João da Silva</p>
        <p>Operador</p>
        <ButtonIcon  leading={<MdIcon.MdSend />} title='Reenviar'/>
      </div>

      <div className="pending-job">
        <MdIcon.MdPerson />
        <p>João da Silva</p>
        <p>Operador</p>
        <ButtonIcon leading={<MdIcon.MdQueryBuilder />} title='Reenviar'/>
      </div>

      <div className="pending-job">
        <MdIcon.MdPerson />
        <p>João da Silva</p>
        <p>Operador</p>
        <ButtonIcon leading={<MdIcon.MdSend />} title='Reenviar'/>
      </div>
    </div>
  );
}

const RecentActivities = () => {
  return (
    <div className="container-job">

      <div className="job-office">
        <h1 className='title center component-title'>Gerente de Projetos</h1>
        <div className="description">
          <div className="area-number-candidate-job">
            <MdIcon.MdPerson />
            <p>Candidatos: 6</p>
          </div>
          <p>Aberto há 23 dias</p>
        </div>

        <div className="button-job">
          <ButtonIcon title='Acessar'/>
        </div>
      </div>

      <div className="job-office">
        <h1 className='title center component-title'>Designer</h1>
        <div className="description">
          <div className="area-number-candidate-job">
            <MdIcon.MdPerson />
            <p>Candidatos: 6</p>
          </div>

          <p>Aberto há 23 dias</p>
        </div>

        <div className="button-job">
          <ButtonIcon title='Acessar' />
        </div>
      </div>

    </div>
  );
}

const Card = ({ title, showList = true }) => {
  return (
    <div className="grid-item">
      <h1 className="section-title">{title}</h1>

      {showList ? <PendingReviews /> : <RecentActivities />}
      <Button label='Ver todas' event={() => {}}/>

    </div>
  );
}

export default Card;
