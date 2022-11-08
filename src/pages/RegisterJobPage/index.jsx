import './styles.css';
import Sidebar from '../../components/sidebar';
import Input from '../../components/input';
import Button from '../../components/button';

import { useNavigate } from 'react-router-dom';

const JobPage = () => {
  const navigate = useNavigate();

  return (
    <section className='page'>
      <Sidebar />
      <section>
        <h1 className='title'>Criar Vaga</h1>
        <Input label='Título da vaga' typeInput='title-job' onChange={() => {}}/>
        <Input label='Descrição da vaga' typeInput='description-job' onChange={() => {}}/>
        <div className="area-button">
          <Button label='Cancelar' event={() => navigate('/jobs')}/>
          <Button label='Próxima etapa' event={() => navigate('/dashboard')}/>
        </div>
      </section>
    </section>
  );
}

export default JobPage;
