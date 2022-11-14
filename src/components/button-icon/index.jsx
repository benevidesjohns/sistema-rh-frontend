import './styles.css'

const ButtonIcon = ({ leading, title, onClick, trailing }) => {
  return (
    <div onClick={onClick} className='button_icon'>
      {leading && <div className='button_icon-icon'>{leading}</div>}
      <h2 className='description-bold'>{title}</h2>
      {trailing && <div className='trailing button_icon-icon'>{trailing}</div>}
    </div>
  );
}

export default ButtonIcon
