
import  type { DateTemp } from "../Hook/useWeather"
import Operation from "./Operation"
type VariableProps = {
    weather: DateTemp
}


const WheatherDetails = ({weather} : VariableProps) => {
  return (
  <>
    <div>
        <h2>Clima de {weather.name}</h2>
        <p>{Operation(weather.main.temp)}&deg;C</p>
        <div>Min: {Operation(weather.main.temp_min)}&deg;C</div>
        <div>Max: {Operation(weather.main.temp_max)}&deg;C</div>
    </div>
  </>
  )
}

export default WheatherDetails