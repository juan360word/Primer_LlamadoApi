
export type Search = {
    city: string,
    country: string
}

export type country = {
    code: string,
    name: string
}

export type DateTemp = {
    name: string,
    main: ({
        temp: number,
        temp_max: number,
        temp_min: number
    })
}