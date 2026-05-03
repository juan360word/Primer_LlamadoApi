
import axios from "axios"
import type { Search } from "../Types/Type"
import type {InferOutput} from 'valibot'
import  {parse,string,number,object, } from 'valibot'
import { useMemo, useState } from "react"


 const temps = object({
        name:string(),
        main: object({
            temp: number(),
        temp_max: number(),
        temp_min: number()
        })
    })

 export type DateTemp = InferOutput<typeof temps> 

 const intialState = {
       name: '',
        main: {
            temp: 0,
            temp_max: 0,
            temp_min: 0
 }
}

const useWeather = () => {
    const [weather, setWeather] = useState<DateTemp>(intialState)
    const [encontrar,setencontrar] = useState(false)
    const [carga,setcarga] = useState(false)
  
    const ApiFetchWeather = async (search : Search) => {
        const APIKey = import.meta.env.VITE_Api_Key
        setcarga(true)
        setWeather(intialState)
        try {
            
            const urlApi = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${APIKey}`
            const {data} = await axios(urlApi)
            if (!data?.length) return
          
            
            const lad = data[0].lat
            const lon = data[0].lon

           const urlLalo = `https://api.openweathermap.org/data/2.5/weather?lat=${lad}&lon=${lon}&appid=${APIKey}`

           if(!data[0]) {
                setencontrar(true)
                return
            }

            // Valibot 

            const  {data:urlLaloResultado } = await axios(urlLalo)
            const resultado = parse(temps,urlLaloResultado)
            if(resultado){
                
                setWeather(resultado)
            }

        } catch (error) {
            console.log(error)
        }finally{
            setcarga(true)
        }
    }
    
    const west = useMemo(() => weather.name,[weather])
  
  
    return {
       
        ApiFetchWeather,
        weather,west,carga,
        encontrar
    }
}

export default useWeather