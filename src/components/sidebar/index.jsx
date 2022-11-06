import './styles.css';

import Button from "../button";
import MiniLogo from '../mini-logo';

const Sidebar = ({ onLogout }) => (
  <div className="sidebar">
    <MiniLogo />

    <h2 className="sidebar-title">Menu</h2>
    <ul className="sidebar-options">
      <li className="sidebar-item">Overview</li>
      <li className="sidebar-item">Cadastrar candidatos</li>
      <li className="sidebar-item">Revisar Candidatos</li>
      <li className="sidebar-item">Vagas</li>
      <li className="sidebar-item">Configurações</li>
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

export default Sidebar;
