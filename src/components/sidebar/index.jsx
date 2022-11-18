import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import * as MdIcon from 'react-icons/md';

import './styles.css';
import { AuthContext } from '../../contexts/auth';

import Button from "../button";
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
            onClick={() => navigate('/dashboard')}
          />
          <DropdownMenu
            key='sidebar-item-candidates'
            title='Candidatos'
            children={[
              { title: 'Revisar Candidatos', path: '/candidates/review' },
              { title: 'Cadastrar Candidatos', path: '/candidates/create' },
            ]} icon={<MdIcon.MdPerson />}
          />
          <DropdownMenu
            key='sidebar-item-jobs'
            title='Vagas'
            children={[
              { title: 'Ver Vagas', path: '/jobs' },
              { title: 'Criar Vaga', path: '/jobs/create' },
            ]} icon={<MdIcon.MdBusiness />}
          />
          <ButtonIcon
            key='sidebar-item-settings'
            leading={<MdIcon.MdSettings />}
            title='Configurações'
            onClick={() => navigate('/config')}
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
        <Button label='Sair' event={onLogout} />
      </section>
    </section>
  );
}

export default Sidebar;
