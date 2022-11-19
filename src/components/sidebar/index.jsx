import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import * as MdIcon from 'react-icons/md';

import './styles.css';
import { AuthContext } from '../../contexts/auth';
import {ROUTES} from '../../routes/paths'

import ButtonIcon from "../button-icon";
import MiniLogo from '../mini-logo';

const DropdownMenu = ({ title, children, icon }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <section>
      <ButtonIcon
        leading={icon}
        title={title}
        onClick={toggleMenu}
        trailing={showMenu ? <MdIcon.MdArrowDropUp /> : <MdIcon.MdArrowDropDown />}
      />
      {showMenu && <div className='dropdown'>
        <div id='separator'></div>
        <div className='dropdown-items'>
          {children && children.map((item, index) => {
            return (
              <Link key={index} to={item.path} className='dropdown-item'>
                <h2 className='description-bold'>{item.title}</h2>
              </Link>
            )
          })}
        </div>
      </div>}
    </section>
  );
}

const Sidebar = () => {

  const user = JSON.parse(localStorage.getItem('user'))
  const { logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
  }

  const navigate = useNavigate();

  return (
    <section className="sidebar">
      <MiniLogo />
      <section className='sidebar-section'>
        <h2 className="sidebar-title">Menu</h2>
        <nav className="sidebar-menu">
          <ButtonIcon
            key='sidebar-item-dashboard'
            leading={<MdIcon.MdSpaceDashboard />}
            title='Dashboard'
            onClick={() => navigate(ROUTES.DASHBOARD)}
          />
          <DropdownMenu
            key='sidebar-item-candidates'
            title='Candidatos'
            children={[
              { title: 'Ver Candidatos', path: ROUTES.CANDIDATES },
              { title: 'Cadastrar Candidato', path: ROUTES.CREATE_CANDIDATE },
            ]} icon={<MdIcon.MdPerson />}
          />
          <DropdownMenu
            key='sidebar-item-jobs'
            title='Vagas'
            children={[
              { title: 'Ver Vagas', path: ROUTES.JOBS },
              { title: 'Criar Vaga', path: ROUTES.CREATE_JOB },
            ]} icon={<MdIcon.MdBusiness />}
          />
          <ButtonIcon
            key='sidebar-item-settings'
            leading={<MdIcon.MdSettings />}
            title='Configurações'
            onClick={() => navigate(ROUTES.CONFIG)}
          />
        </nav>
      </section>

      <div className="horizontal-separator"></div>

      <section className='sidebar-section sidebar-section-profile'>
        <h2 className="sidebar-title">Profile</h2>
        <div className="profile">
          <img src="https://avatars.githubusercontent.com/u/84235201?v=4" alt="Foto do Usuário" />
          <div className="profile-info">
            <h3>{user.data.name}</h3>
            <p>{user.data.email}</p>
          </div>
        </div>
        <ButtonIcon
            key='sidebar-item-logout'
            leading={<MdIcon.MdLogout />}
            title='Sair'
            center={true}
            onClick={onLogout}
          />
      </section>
    </section>
  );
}

export default Sidebar;
