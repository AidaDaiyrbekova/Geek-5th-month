import  {useState} from "react"
import weatherData from  '../db/Weather.json'
import style from './Weather.module.scss'

export const Weather = () => {
    const [inputValue, setInputValue] = useState("")
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState("")

    const handleClick = () => {
        const city = inputValue

        if (city && weatherData[city]){
            setWeather(weatherData[city])
            setError("")
        }
        else {
            setWeather(null)
            setError("Город не найден ")
        }
    }

  return (
    <div >
        <div className={style.searchBox}>
            <input type="text"
            placeholder="Введите город..." 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={handleClick} className={style.button}>Показать погоду</button>
        </div>
        

          <div className={style.result}>
        {weather && (
          <div className={style.card}>
            <p className={style.temp}>{weather.temp}°C</p>
            <p className={style.desc}>{weather.description}</p>
            <span className={style.icon}>{weather.icon}</span>
          </div>
        )}
        {error && <p className={style.error}>{error}</p>}
      </div>
    </div>
  )
}
           