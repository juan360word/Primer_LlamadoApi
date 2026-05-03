

// Imports

import { countries } from "../Data/Data"
import { useState } from "react"
import Alerts from "../Alert/Alerts"
import type { Search } from "../Types/Type"


type ApiFetchProp = {
    ApiFetchWeather: (search: Search) => Promise<void>
}


const Form = ({ApiFetchWeather} : ApiFetchProp ) => {

    

    const [search,setSearch] = useState({
        city:'',
        country:''
    })
    const [Alert,setAlert] = useState('')

    const HandleClick = ((e : React.ChangeEvent<HTMLInputElement, HTMLInputElement> | React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
            setSearch({
                ...search,
                [e.target.name] : e.target.value
            })
    })

    const HandleSumit = ((e : React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        if(Object.values(search).includes('')){
          setAlert('Los campos estan vacios')
          return
        }
        ApiFetchWeather(search)
    })

    return (

        <>
            <form action="" onSubmit={HandleSumit}>
            
                <div className="flex flex-col gap-4 w-96 ml-90 mt-60">
                {Alert && <Alerts>{Alert}</Alerts>}
                    {/* City */}
                    <div className="flex flex-col  gap-1">
                        <label htmlFor="City" className="text-white text-2xl font-medium tracking-wide">
                            Ciudad
                        </label>
                        <input
                            id="City"
                            name="city"
                            placeholder="Ej: Bogotá"
                            type="text"
                            value={search.city}
                            onChange={HandleClick}
                            className="w-full text-3xl bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-7 text-white placeholder:text-white/50 outline-none 
                            focus:border-white/70 focus:bg-white/20 transition-all duration-200"
                        />
                    </div>

                    {/* Country */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="Country" className="text-white text-2xl font-medium tracking-wide">
                            País
                        </label>
                        <select
                            name="country"
                            id="Country"
                            value={search.country}
                            onChange={HandleClick}
                            className="w-full text-3xl bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-7 text-white outline-none focus:border-white/70 focus:bg-white/20 transition-all duration-200 cursor-pointer"
                        >
                            <option value="" className="bg-gray-800 text-white">Selecciona un país</option>
                            {countries.map((item) => (
                                <option value={item.code} key={item.code} className="bg-gray-800 text-white">
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full mt-6 text-2xl  bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/40 text-white font-semibold tracking-wide py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                        Consultar clima
                    </button>

                </div>
            </form>
        </>
    )
}

export default Form