import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = () => {
  return (
    <div className="actions">
      <button className="button-login" type="submit">
        Entrar
      </button>
    </div>
  );
}

const AreaInput = ({ nameLabel, typeInput }) => {
  return (
    <div className="field">
      <label htmlFor={typeInput}>{nameLabel}</label>
      <input type={typeInput} name={typeInput} id={typeInput} />
    </div>
  );
}

AreaInput.propTypes = {
  nameLabel: PropTypes.string.isRequired,
  typeInput: PropTypes.func.isRequired,
};

const AreaLogin = () => {
  return (
    <form className="form">
      <AreaInput nameLabel="Email" typeInput="email" l />
      <AreaInput nameLabel="Senha" typeInput="password" />
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
