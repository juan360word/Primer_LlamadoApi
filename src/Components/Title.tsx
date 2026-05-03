import Form from "./Form"
import useWeather from "../Hook/useWeather"
import WheatherDetails from "./WheatherDetails"
import Spiner from "./Spiner"

const Title = () => {
  const {weather,carga,ApiFetchWeather,west} = useWeather()
  
  return (
    <>
    <h1 className='font-v1 flex justify-center mt-7  text-white'>Weather Lookup System </h1>
        <div className='mx-auto w-full grid grid-cols-2'>
             <Form
              ApiFetchWeather={ApiFetchWeather}
             />
             {carga && 
             <Spiner/>
             }
             {west && 
              <WheatherDetails
             weather={weather}
             
             />
             }
            
        </div>
    </>
  )
}

export default Title