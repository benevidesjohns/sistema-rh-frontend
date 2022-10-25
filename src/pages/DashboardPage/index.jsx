import React, { useContext } from "react";
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
      <button onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
};

export default DashboardPage;
