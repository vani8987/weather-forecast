
const HandlerApiWeather = async (city:string, setMethod: any) => {
    try {
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_KEY_OPEN_WEATHER_MAP}&lang=ru`)
        const res = await result.json()
        setMethod(res)
    } catch(err){
        console.log(err)
    }
}

export default HandlerApiWeather