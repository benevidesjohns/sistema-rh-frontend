import React, { useState, useContext } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import AreaLogo from '../../components/area-logo';
import "./styles.css";

import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';

const AreaRegister = () => {
  const { register } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const navigate = useNavigate();

  const onChangeName = (name) => setName(name.target.value);
  const onChangeEmail = (email) => setEmail(email.target.value);
  const onChangePassword = (password) => setPassword(password.target.value);
  const onChangePasswordConfirmation = (password) => setPasswordConfirmation(password.target.value);

  const submit = (e) => {
    e.preventDefault();

    // integration with my context
    register(name, email, password, passwordConfirmation);
  }

  return (
    <div className="area-form">
      <form onSubmit={submit} className="form">
        <Input
          id={0}
          value={name}
          onChange={onChangeName}
          label="Nome"
          typeInput="text"
        />
        <Input
          id={1}
          value={email}
          onChange={onChangeEmail}
          label="Email"
          typeInput="email"
        />
        <Input
          id={2}
          value={password}
          onChange={onChangePassword}
          label="Senha"
          typeInput="password"
        />
        <Input
          id={3}
          value={passwordConfirmation}
          onChange={onChangePasswordConfirmation}
          label="Confirmar Senha"
          typeInput="password"
        />
        <Button label='Cadastrar' />
      </form>

      <Button label='Voltar' event={() => navigate('/login')} />
    </div>
  );
}

const RegisterPage = () => {
  return (
    <section>
      <h1 className="title center auth-title">Cadastre-se</h1>
      <div className="auth-area">
        <AreaLogo />
        <div className="vertical-separator"></div>
        <AreaRegister />
      </div>
    </section>
  );
}

export default RegisterPage;
