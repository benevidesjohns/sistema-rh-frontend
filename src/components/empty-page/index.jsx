import { useNavigate } from "react-router-dom"
import Button from "../button"

const EmptyPage = ({ title, label, path }) => {
  const navigate = useNavigate()

  return (
    <div className='column c-center center gap'>
      <h1 className='title center section-title'>{title}</h1>
      <div className="row center">
        {label && <Button
          label={label}
          event={() => navigate(path)}
        />}
      </div>
    </div>
  )
}

export default EmptyPage
