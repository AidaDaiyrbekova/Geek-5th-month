import { useNavigate } from "react-router-dom"
import style from './Error.module.css'

export const Error = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <div className={style.errorContainer}>
      <div className={style.errorMessage}>Error</div>
      <div className={style.errorCode}>404</div>
      <div className={style.errorMessage}>Not found</div>
      <button className={style.button} onClick={handleClick}>
        ˂ Prev
      </button>
    </div>
  )
}
