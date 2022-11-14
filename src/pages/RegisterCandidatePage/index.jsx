import { useNavigate } from 'react-router-dom';

import './styles.css';
import businessWoman from '../../assets/business-woman.png';

import Input from '../../components/input';
import Button from '../../components/button';

const RegisterCandidatePage = () => {
  const navigate = useNavigate();

  return (
    <section className='page'>
      <h1 className='title center page-title'>Cadastrar Candidatos</h1>
      <div className='content register-candidate-area'>
        <div className='register-candidate-form'>
          <Input label='Nome' typeInput='title-name' onChange={() => { }} />
          <Input label='Email' typeInput='title-email' onChange={() => { }} />
          <Input label='Telefone' typeInput='title-phone' onChange={() => { }} />
          <div className="area-button">
            <Button label='Cancelar' event={() => navigate('/dashboard')} isCancel={true} />
            <Button label='Salvar' event={() => navigate('/candidates/review')} />
          </div>
        </div>
        <div className='business-woman'>
          <img src={businessWoman} alt="Mulher de Negócios" />
        </div>
      </div>
    </section>
  );
}

export default RegisterCandidatePage;
