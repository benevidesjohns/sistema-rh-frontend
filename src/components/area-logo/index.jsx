import React from 'react';
import logo from '../../assets/logo.png'
import './style.css';

const AreaLogo = () => {
  return (
    <div className="area-logo">
      <h1 className="title">Sistema RH</h1>
      <div id="logo">
        <img src={logo} alt="Logo Sistema RH" />
      </div>
    </div>
  );
}

export default AreaLogo;
