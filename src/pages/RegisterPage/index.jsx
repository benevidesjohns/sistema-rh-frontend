import React, { useState, useContext } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import AreaLogo from '../../components/area-logo';
import "./styles.css";

import { useNavigate } from 'react-router-dom';

const AreaRegister = () => {
  // useState to email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // functions to be added in onChange of the input
  const setInputEmail = (email) => setEmail(email.target.value);
  const setInputPassword = (password) => setPassword(password.target.value);

  // function to submit event button
  const submit = (e) => {
    e.preventDefault();

    // integration with my context

    console.log('login', { email, password });
  }

  return (
    <div className="area-form">
      <form onSubmit={submit} className="form">
        <Input value={email} onChange={setInputEmail} label="Email" typeInput="email" />
        <Input value={email} onChange={setInputEmail} label="Confirme o email" typeInput="confirmEmail" />
        <Input value={password} onChange={setInputPassword} label="Senha" typeInput="password" />

        <Button label='Cadastrar' />
      </form>

      <Button label='Voltar' event={() => navigate('/login')} />
    </div>
  );
}

const RegisterPage = () => {
  return (
    <section>
      <h1 className="auth-title">Cadastre-se</h1>
      <div className="auth-area">
        <AreaLogo />
        <div className="vertical-separator"></div>
        <AreaRegister />
      </div>
    </section>
  );
}

export default RegisterPage;
