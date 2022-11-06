import React, { useState, useContext } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import AreaLogo from '../../components/area-logo';
import "./styles.css";
import '../../styles/global.css';

import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';

const AreaLogin = () => {
  const { authenticated, login } = useContext(AuthContext);

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
    console.log('login', { email, password });
  }

  return (
    <div className="area-form">
      <form onSubmit={submit} className="form">
        <Input value={email} onChange={setInputEmail} label="Email" typeInput="email" />
        <Input value={password} onChange={setInputPassword} label="Senha" typeInput="password" />

        <div className="forgot-password">
          <a href="">Esqueci minha senha</a>
        </div>

        <Button label='Entrar' />
      </form>
      <Button label='Cadastre-se' event={() => navigate('/register')} />
    </div>
  );
}

const LoginPage = () => {
  return (
    <section>
      <h1 className="title">Login</h1>
      <div className="auth-area">
        <AreaLogo />
        <div className="separator"></div>
        <AreaLogin />
      </div>
    </section>
  );
}

export default LoginPage;
