import './styles.css'

const TextIconButton = ({ leading, title, onClick, trailing, center = false }) => {
  return (
    <div onClick={onClick} className={`text-icon-button ${center && "center"}`}>
      {leading && <div className='icon'>{leading}</div>}
      <h2 className='description-bold'>{title}</h2>
      {trailing && <div className='trailing icon'>{trailing}</div>}
    </div>
  );
}

export default TextIconButton
