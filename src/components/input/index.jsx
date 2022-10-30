import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Input = ({ value, setInput, nameLabel, typeInput }) => {
  return (
    <div className="field">

      {
        nameLabel ? <label htmlFor={typeInput}>{nameLabel}</label> : ''
      }

      <input
        type={typeInput}
        id={typeInput}
        name={typeInput}
        value={value}
        onChange={setInput}
      />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  nameLabel: PropTypes.string,
  typeInput: PropTypes.string.isRequired,
};

export default Input;
