import { useNavigate } from 'react-router-dom';

import './styles.css';
import businessWoman from '../../assets/business-woman.png';

import Input from '../../components/input';
import Button from '../../components/button';

const RegisterCandidatePage = () => {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();



    navigate('/candidates/review');
  }

  return (
    <section className='page'>
      <h1 className='title center page-title'>Cadastrar Candidatos</h1>
      <div className='content register-candidate-content'>
        <div className='register-candidate-area'>
          <h1 className='title section-title' >Informações gerais</h1>
          <div className='area-form'>
            <div className='form'>
              <Input id={0} label='Nome' typeInput='title-name' onChange={() => { }} />
              <Input id={1} label='Email' typeInput='title-email' onChange={() => { }} />
              <Input id={2} label='Telefone' typeInput='title-phone' onChange={() => { }} />
              <div className="area-button">
                <Button label='Cancelar' event={() => navigate('/dashboard')} isCancel={true} />
                <Button label='Salvar' event={submit} />
              </div>
            </div>
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
