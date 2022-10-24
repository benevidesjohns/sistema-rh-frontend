import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({submit}) => {
  return (
    <div className="actions">
      <button onClick={submit} className="button-login" type="submit">
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
  nameLabel: PropTypes.string.isRequired,
  typeInput: PropTypes.string.isRequired,
};

const AreaLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setInputEmail = (e) => setEmail(e.target.value);
  const setInputPassword = (e) => setPassword(e.target.value);

  const submit = (e) => {
    e.preventDefault();
    console.log('submit', {email, password});
  }

  return (
    <form className="form">
      <AreaInput value={email} setInput={setInputEmail} nameLabel="Email" typeInput="email"/>
      <AreaInput value={password} setInput={setInputPassword} nameLabel="Senha" typeInput="password" />
      <Button submit={submit}/>
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
