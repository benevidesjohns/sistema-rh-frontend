import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Input = ({ value, onChange, label, typeInput }) => {
  return (
    <div className="field">

      {
        label ? <label htmlFor={typeInput}>{label}</label> : ''
      }

      <input
        type={typeInput}
        id={typeInput}
        name={typeInput}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  typeInput: PropTypes.string.isRequired,
};

export default Input;
