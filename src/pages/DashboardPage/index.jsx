import React, { useContext } from "react";
import Button from '../../components/button'
import "./styles.css";

import { AuthContext } from '../../contexts/auth'

const DashboardPage = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <div className='header-dashboard'>
      <h1>Dashboard</h1>
      <Button label='Sair' event={handleLogout} />
    </div>
  );
};

export default DashboardPage;
