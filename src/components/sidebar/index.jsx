import './styles.css';
import { useContext } from 'react';

import Button from "../button";
import MiniLogo from '../mini-logo';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
  }

  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <MiniLogo />

      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-options">
        <li onClick={() => navigate('/dashboard')} className="sidebar-item">Overview</li>
        <li onClick={() => navigate('/register-candidates')} className="sidebar-item">Cadastrar candidatos</li>
        <li onClick={() => navigate('/review-candidates')} className="sidebar-item">Revisar Candidatos</li>
        <li onClick={() => navigate('/register-job')} className="sidebar-item">Vagas</li>
        <li onClick={() => navigate('/config')} className="sidebar-item">Configurações</li>
      </ul>

      <div className="horizontal-separator"></div>

      <h2 className="sidebar-title">Profile</h2>
      <div className="profile">
        <img src="https://avatars.githubusercontent.com/u/84235201?v=4" alt="Foto do Usuário" />
        <div className="profile-info">
          <h3>João Benevides</h3>
          <p>joaobenevides@email.com</p>
        </div>
      </div>

      <Button label='Sair' event={onLogout} />
    </div>
  );
}

export default Sidebar;
