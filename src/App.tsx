import { useEffect, useState } from "react"
import Header from "./components/header/Header"
import Main from "./components/Main/Main"
import HandlerApiWeather from "./Api/OpenWeatherMap/OpenWeatherMap"


function App() {
    const [city, setCity] = useState<string>("")

    const handlerCity = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setCity(event.target.value)
    }

    useEffect(() => {
        console.log(HandlerApiWeather(city))
    }, [city])

    return (
        <div className="px-10 py-5">
            <Header handlerCity={handlerCity}/>
            <Main />
        </div>
    )
}

export default App
