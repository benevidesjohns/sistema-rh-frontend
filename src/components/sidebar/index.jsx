import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import * as MdIcon from 'react-icons/md';

import './styles.css';
import { AuthContext } from '../../contexts/auth';

import Button from "../button";
import MiniLogo from '../mini-logo';

const SidebarItem = ({ icon, title, onClick, trailing }) => {
  return (
    <div onClick={onClick} className='sidebar-menu-item'>
      <div className='sidebar-menu-item-icon'>{icon}</div>
      <h2 className='sidebar-menu-item-title'>{title}</h2>
      {trailing ? <div className='trailing sidebar-menu-item-icon'>
        {trailing}
      </div> : null}
    </div>
  );
}

const DropdownMenu = ({ title, children, icon }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <section>
      <SidebarItem
        icon={icon}
        title={title}
        onClick={toggleMenu}
        trailing={showMenu ? <MdIcon.MdArrowDropUp /> : <MdIcon.MdArrowDropDown />}
      />
      {showMenu ? <div className='dropdown'>
        <div id='separator'></div>
        <div className='dropdown-items'>
          {children ? children.map((item, index) => {
            return (
              <div className='dropdown-item'>
                <Link key={index} to={item.path} className='dropdown-item-link'>
                  <h2 className='sidebar-menu-item-title'>{item.title}</h2>
                </Link>
              </div>
            )
          }) : null}
        </div>
      </div> : null}
    </section>
  );
}

const Sidebar = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  const { logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
  }

  const navigate = useNavigate();

  return (
    <section className="sidebar">
      <MiniLogo />
      <section className='sidebar-section-menu'>
        <h2 className="sidebar-title">Menu</h2>
        <nav className="sidebar-menu">
          <SidebarItem
            icon={<MdIcon.MdSpaceDashboard />}
            title='Dashboard'
            onClick={() => navigate('/dashboard')}
          />
          <DropdownMenu title='Candidatos' children={[
            { title: 'Revisar Candidatos', path: '/candidates/review' },
            { title: 'Cadastrar Candidatos', path: '/candidates/create' },
          ]} icon={<MdIcon.MdPerson />} />
          <DropdownMenu title='Vagas' children={[
            { title: 'Ver Vagas', path: '/jobs' },
            { title: 'Criar Vaga', path: '/jobs/create' },
          ]} icon={<MdIcon.MdBusiness />} />
          <SidebarItem
            icon={<MdIcon.MdSettings />}
            title='Configurações'
            onClick={() => navigate('/config')}
          />
        </nav>
      </section>

      <div className="horizontal-separator"></div>

      <section className='sidebar-section-profile'>
        <h2 className="sidebar-title">Profile</h2>
        <div className="profile">
          <img src="https://avatars.githubusercontent.com/u/84235201?v=4" alt="Foto do Usuário" />
          <div className="profile-info">
            <h3>{user.data.name}</h3>
            <p>{user.data.email}</p>
          </div>
        </div>
        <Button label='Sair' event={onLogout} />
      </section>
    </section>
  );
}

export default Sidebar;
