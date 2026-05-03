import Form from "./Form"
import useWeather from "../Hook/useWeather"
import WheatherDetails from "./WheatherDetails"


const Title = () => {
  const {weather,ApiFetchWeather,west} = useWeather()
  
  return (
    <>
    <h1 className='font-v1 flex justify-center mt-7 text-white'>Weather Lookup System</h1>
    <div className='w-full grid grid-cols-2 px-16 mt-10 items-start gap-8'>
      
      {/* Columna izquierda - Form */}
      <Form ApiFetchWeather={ApiFetchWeather} />
  
      {/* Columna derecha - Spinner o Tarjeta */}
      <div>
        {west && (
          <WheatherDetails weather={weather} />
        )}
      </div>
  
    </div>
  </>
  )
}

export default Title