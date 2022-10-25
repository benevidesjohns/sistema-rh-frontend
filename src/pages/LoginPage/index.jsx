import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import { AuthContext } from '../../contexts/auth';

const Button = () => {
  return (
    <div className="actions">
      <button className="button-login" type="submit">
        Entrar
      </button>
    </div>
  );
}

const AreaInput = ({ value, setInput, nameLabel, typeInput }) => {
  return (
    <div className="field">
      <label htmlFor={typeInput}>{nameLabel}</label>
      <input
        type={typeInput}
        name={typeInput}
        id={typeInput}
        value={value}
        onChange={setInput}
      />
    </div>
  );
}

AreaInput.propTypes = {
  value: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  nameLabel: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
};

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
      <AreaInput value={email} setInput={setInputEmail} nameLabel="Email" typeInput="email" />
      <AreaInput value={password} setInput={setInputPassword} nameLabel="Senha" typeInput="password" />
      <Button />
    </form>
  );
}

const LoginPage = () => {
  return (
    <div id="login">
      <h1 className="title">Sistema RH</h1>
      <AreaLogin />
    </div>
  );
}

export default LoginPage;
