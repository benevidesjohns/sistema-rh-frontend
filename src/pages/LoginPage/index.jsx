import React, { useState, useContext } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import AreaLogo from '../../components/area-logo'
import './style.css';

import { IoLogoFacebook, IoLogoGoogle } from 'react-icons/io';

import { AuthContext } from '../../contexts/auth';

const AltLogin = () => {
  return (
    <>
      <div className="forgot-password">
        <a href="">Esqueci minha senha</a>
      </div>

      <Button nameButton='Entrar' />
      <Button nameButton='Cadastre-se' />

      <div className="line-width"></div>

      <div className="title-alt-login">
        <p>Ou entre com</p>
      </div>
      <div className="alt-login">
        <div className="google"><IoLogoGoogle /></div>
        <div className="facebook"><IoLogoFacebook /></div>
      </div>
    </>

  );
}

const AreaLogin = () => {
  const { authenticated, login } = useContext(AuthContext);

  // useState to email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // functions to be added in onChange of the input
  const setInputEmail = (e) => setEmail(e.target.value);
  const setInputPassword = (e) => setPassword(e.target.value);

  // function to submit event button
  const submit = (e) => {
    e.preventDefault();

    // integration with my context
    login(email, password);
    console.log('login', { email, password });
  }

  return (
    <form onSubmit={submit} className="form">
      <Input value={email} setInput={setInputEmail} nameLabel="Email" typeInput="email" />
      <Input value={password} setInput={setInputPassword} nameLabel="Senha" typeInput="password" />
      <AltLogin />
    </form>
  );
}

const LoginPage = () => {
  return (
    <div className="page">
      <h1 className="title">Login</h1>
      <div id="login">
        <AreaLogo />
        <div className="line-height"></div>
        <AreaLogin />
      </div>
    </div>
  );
}

export default LoginPage;
