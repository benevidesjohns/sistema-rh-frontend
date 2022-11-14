import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ label, event, isCancel = false }) => {
  return (
    <button
      className={`button ${isCancel && "button-cancel"}`}
      type="submit"
      onClick={event}
    > {label} </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  event: PropTypes.func
};

export default Button;
