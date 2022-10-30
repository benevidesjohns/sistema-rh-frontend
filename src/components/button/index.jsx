import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ nameButton, event }) => {
  return (
    <div className="actions">
      <button className="button" type="submit" onClick={event}>
        {nameButton}
      </button>
    </div>
  );
}

Button.propTypes = {
  nameButton: PropTypes.string.isRequired,
  event: PropTypes.func
};

export default Button;
