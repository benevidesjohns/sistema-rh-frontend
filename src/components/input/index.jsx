import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Input = ({ id, value, onChange, label, typeInput }) => {
  return (
    <div className="field">
      {label && <label htmlFor={typeInput}>{label}</label>}
      <input
        type={typeInput}
        id={id || typeInput}
        name={typeInput}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  typeInput: PropTypes.string.isRequired,
};

export default Input;
