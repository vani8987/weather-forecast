import { useEffect, useRef, useState } from "react"
import Header from "./components/header/Header"
import Main from "./components/Main/Main"
import HandlerApiWeather from "./Api/OpenWeatherMap/OpenWeatherMap"
import TypeWeather from "./Type/TyepWeather"
import Atmosphere from "./Assets/img/Atmosphere.jpg"
import Clear from "./Assets/img/Clear.jpg"
import Cloudy from "./Assets/img/cloudy.jpg"
import Drizzle from "./Assets/img/Drizzle.jpg"
import Rain from "./Assets/img/Rain.jpg"
import Snow from "./Assets/img/Snow.jpg"
import Thunderstorm from "./Assets/img/Thunderstorm.jpg"


function App() {
    const ValueInputCity = useRef<any>(null)
    const [weatherApi, setWeather] = useState<TypeWeather | null>(null)
    const [bgImg, setBgImg] = useState<string | undefined>(undefined)

    const handlerCity = (event: React.FormEvent<EventTarget>):void => {
        event.preventDefault()
        setWeather(null)
        HandlerApiWeather(ValueInputCity.current.value.toLowerCase().trim() + ", RU", setWeather)
    }

    useEffect(() => {
        switch (weatherApi?.weather[0]?.main){
            case undefined:
                setBgImg(Clear)
                break
            case "Thunderstorm":
                setBgImg(Thunderstorm)
                break
            case "Drizzle":
                setBgImg(Drizzle)
                break
            case "Rain":
                setBgImg(Rain)
                break
            case "Snow":
                setBgImg(Snow)
                break
            case "Atmosphere":
                setBgImg(Atmosphere)
                break
            case "Clear":
                setBgImg(Clear)
                break
            case "Clouds":
                setBgImg(Cloudy)
                break
        }
    }, [weatherApi])

    return (
        <div className='h-screen bg-center bg-auto md:bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="px-5 py-3 md:px-8 md:y-5" >
                <Header handlerCity={handlerCity} ValueInputCity={ValueInputCity}/>
                <Main weatherApi={weatherApi}/>
            </div>
        </div>
    )
}

export default App
