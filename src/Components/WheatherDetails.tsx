
import type { DateTemp } from "../Hook/useWeather"
import Operation from "./Operation"
type VariableProps = {
  weather: DateTemp
}


const WheatherDetails = ({ weather }: VariableProps) => {
  return (
    <>
      <div className="bg-white/10 backdrop-blur-sm border mt-50 border-white/30 rounded-2xl p-20 text-white font-v1 w-96">
        <h2 className="text-3xl font-semibold mb-6">Clima de {weather.name}</h2>
        <p className="text-7xl font-bold mb-4">{Operation(weather.main.temp)}&deg;C</p>
        <div className="flex gap-6 text-lg text-white/80">
          <span>Min: {Operation(weather.main.temp_min)}&deg;C</span>
          <span>Max: {Operation(weather.main.temp_max)}&deg;C</span>
        </div>
      </div>
    </>
  )
}

export default WheatherDetails