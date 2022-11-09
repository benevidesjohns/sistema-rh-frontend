import { useNavigate } from 'react-router-dom';

import './styles.css';

import Input from '../../components/input';
import Button from '../../components/button';

const RegisterCandidatePage = () => {
  const navigate = useNavigate();

  return (
    <section className='page'>
      <h1 className='title'>Cadastrar Candidatos</h1>
      <Input label='Nome' typeInput='title-name' onChange={() => { }} />
      <Input label='Email' typeInput='title-email' onChange={() => { }} />
      <Input label='Telefone' typeInput='title-phone' onChange={() => { }} />
      <div className="area-button">
        <Button label='Cancelar' event={() => navigate('/dashboard')} isCancel={true}/>
        <Button label='Salvar' event={() => navigate('/candidates/review')} />
      </div>
    </section>
  );
}

export default RegisterCandidatePage;
