import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ label, event}) => {
  return (
    <div className="actions">
      <button className="button" type="submit" onClick={event}>
        {label}
      </button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  event: PropTypes.func
};

export default Button;
