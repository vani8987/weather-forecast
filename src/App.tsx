import { useRef, useState } from "react"
import Header from "./components/header/Header"
import Main from "./components/Main/Main"
import HandlerApiWeather from "./Api/OpenWeatherMap/OpenWeatherMap"
import TypeWeather from "./Type/TyepWeather"


function App() {
    const ValueInputCity = useRef<any>(null)
    const [weatherApi, setWeather] = useState<TypeWeather | null>(null)

    const handlerCity = (event: React.FormEvent<EventTarget>):void => {
        event.preventDefault()
        HandlerApiWeather(ValueInputCity.current.value.toLowerCase() + ", ru", setWeather)
        console.log(weatherApi)
    }

    return (
        <div className="px-10 py-5">
            <Header handlerCity={handlerCity} ValueInputCity={ValueInputCity}/>
            <Main weatherApi={weatherApi}/>
        </div>
    )
}

export default App
