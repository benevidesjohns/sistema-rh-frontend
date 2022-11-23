import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.css';
import businessWoman from '../../assets/business-woman.png';
import { CandidatesContext } from '../../contexts/candidates';
import { ROUTES } from '../../routes/paths'

import Input from '../../components/input';
import Button from '../../components/button';
import MiniPopup from '../../components/pop-up';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const RegisterCandidatePage = () => {
  const navigate = useNavigate()

  const { create } = useContext(CandidatesContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const changeName = (name) => setName(name.target.value);
  const changeEmail = (email) => setEmail(email.target.value);
  const changePhone = (phone) => setPhone(phone.target.value);

  const submit = (e) => {
    e.preventDefault();
    create({ name: name, email: email, phone: phone });
  }

  return (
    <section className='page'>
      <h1 className='title center page-title'>Cadastrar Candidatos</h1>
      <div className='content register-candidate-content'>
        <div className='register-candidate-area'>
          <h1 className='title section-title' >Informações gerais</h1>
          <div className='area-form'>
            <div className='form'>
              <Input
                id={0}
                value={name}
                label='Nome'
                typeInput='title-name'
                onChange={changeName}
              />
              <Input
                id={1}
                value={email}
                label='Email'
                typeInput='title-email'
                onChange={changeEmail}
              />
              <Input
                id={2}
                value={phone}
                label='Telefone'
                typeInput='title-phone'
                onChange={changePhone}
              />
              <div className="area-button">
                <Button
                  label='Cancelar'
                  event={() => navigate(ROUTES.DASHBOARD)}
                  isCancel={true}
                />
                <Button
                  label='Cadastrar'
                  event={(e) => submit(e)}
                />
                {/* <MiniPopup
                  label="Cadastrar"
                  content={<h1>Teste</h1>}
                  submit={(e) => submit(e)}
                /> */}
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
