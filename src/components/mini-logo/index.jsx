import logo from '../../assets/logo.png'
import './styles.css';

const MiniLogo = () => {
  return (
    <div className="mini-logo">
      <img src={logo} alt="Logo Sistema RH" />
      <h1 className="title">Sistema RH</h1>
    </div>
  );
}

export default MiniLogo;
