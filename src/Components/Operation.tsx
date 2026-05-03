


const Operation = (Temperatura : number) : number => {
    const kelvin = 273.15
    return  parseInt((Temperatura - kelvin).toString())   
}

export default Operation