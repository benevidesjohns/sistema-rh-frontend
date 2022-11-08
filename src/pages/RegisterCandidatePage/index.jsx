import './styles.css';
import Sidebar from '../../components/sidebar';
import Input from '../../components/input';
import Button from '../../components/button';

import { useNavigate } from 'react-router-dom';

const RegisterCandidatePage = () => {
  const navigate = useNavigate();

  return (
    <section className='page'>
      <Sidebar />
      <section>
      <h1 className='title'>Cadastrar Candidatos</h1>
        <Input label='Nome' typeInput='title-name' onChange={() => {}}/>
        <Input label='Email' typeInput='title-email' onChange={() => {}}/>
        <Input label='Telefone' typeInput='title-phone' onChange={() => {}}/>
        <div className="area-button">
          <Button label='Cancelar' event={() => navigate('/dashboard')}/>
          <Button label='Salvar' event={() => navigate('/review-candidates')}/>
        </div>
      </section>
    </section>
  );
}

export default RegisterCandidatePage;
