import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import "./styles.css";
import { AuthContext } from '../../contexts/auth';
import {ROUTES} from '../../routes/paths'

import Button from '../../components/button';
import Input from '../../components/input';
import AreaLogo from '../../components/area-logo';

const AreaLogin = () => {
  const { login } = useContext(AuthContext);

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
    login(email, password);
  }

  return (
    <div className="area-form">
      <form onSubmit={submit} className="form">
        <Input
        id={0}
        value={email}
        onChange={setInputEmail}
        label="Email"
        typeInput="email"
        />
        <Input
        id={1}
          value={password}
          onChange={setInputPassword}
          label="Senha"
          typeInput="password"
        />
        <div className="forgot-password">
          <a className='font-link'>Esqueci minha senha</a>
        </div>
        <Button label='Entrar' />
      </form>
      <Button label='Cadastre-se' event={() => navigate(ROUTES.REGISTER)} />
    </div>
  );
}

const LoginPage = () => {
  return (
    <section>
      <h1 className="title center auth-title">Login</h1>
      <div className="auth-area">
        <AreaLogo />
        <div className="vertical-separator"></div>
        <AreaLogin />
      </div>
    </section>
  );
}

export default LoginPage;
