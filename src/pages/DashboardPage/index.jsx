import React, { useContext } from "react";
import Button from '../../components/button'
import "./style.css";

import { AuthContext } from '../../contexts/auth'

const DashboardPage = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <div className='header-dashboard'>
      Dashboard
      <Button nameButton='Sair' event={handleLogout} />
    </div>
  );
};

export default DashboardPage;
