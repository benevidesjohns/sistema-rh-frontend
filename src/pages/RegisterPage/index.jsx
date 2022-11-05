import React, { useState, useContext } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import AreaLogo from '../../components/area-logo';
import './register.css';
import '../../styles/global.css';

import { useNavigate } from 'react-router-dom';

const AreaRegister = () => {
  // useState to email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // functions to be added in onChange of the input
  const setInputEmail = (e) => setEmail(e.target.value);
  const setInputPassword = (e) => setPassword(e.target.value);

  // function to submit event button
  const submit = (e) => {
    e.preventDefault();

    // integration with my context

    console.log('login', { email, password });
  }

  return (
    <div className="area-form">
      <form onSubmit={submit} className="form">
        <Input value={email} setInput={setInputEmail} nameLabel="Email" typeInput="email" />

        <Input value={email} setInput={setInputEmail} nameLabel="Confirme o email" typeInput="confirmEmail" />

        <Input value={password} setInput={setInputPassword} nameLabel="Senha" typeInput="password" />
        <Button nameButton='Cadastrar' />
      </form>

      <Button nameButton='Voltar' event={() => navigate('/login')} />
    </div>
  );
}

const RegisterPage = () => {
  return (
    <>
      <h1 className="title">Cadastre-se</h1>
      <div className="auth-area">
        <AreaLogo />

        <div className="line-height"></div>

        <AreaRegister />
      </div>
    </>
  );
}

export default RegisterPage;
