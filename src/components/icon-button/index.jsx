import './styles.css'

const IconButton = ({ icon, onClick }) => {
  return (
    <div onClick={onClick} className="icon-button">
      <div className='icon'>{icon}</div>
    </div>
  );
}

export default IconButton
