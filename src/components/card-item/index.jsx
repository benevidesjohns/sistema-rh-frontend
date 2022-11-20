import './styles.css'

const CardItem = ({ title, description, infos, trailing }) => {
  return (
    <div className="card">
      <div className="area-title-description">
        <h1 className='component-title'>{title}</h1>
        {description && <h3 className='description-font'>{description}</h3>}
        {infos && infos.map((info) => {
          return (
            <div key={info.key} className="row gap">
              <h3 className="description-font-green">{info.key}</h3>
              <h3 className="description-bold" >{info.value}</h3>
            </div>
          )
        })}
      </div>
      {trailing}
    </div>
  );
}

export default CardItem
