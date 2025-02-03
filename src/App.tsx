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
import React from "react"


function App() {
    const ValueInputCity = useRef<any>(null)
    const [weatherApi, setWeatherApi] = useState<TypeWeather | null>(null)
    const [favoritСountries, setFavoritСountries] = useState<string[]>(JSON.parse(localStorage.getItem("favoritСountries")!) || [])
    const [bgImg, setBgImg] = useState<string | undefined>(undefined)

    const handlerCity = (event: React.FormEvent<EventTarget>):void => {
        event.preventDefault()
        setWeatherApi(null)
        HandlerApiWeather(ValueInputCity.current.value.toLowerCase().trim() + ", RU", setWeatherApi)
    }

    const handlerfavoritСountries = (): void => {
        if (favoritСountries.includes(String(weatherApi?.name))) {
          setFavoritСountries(favoritСountries => favoritСountries.filter(item => item !== String(weatherApi?.name))); 
        } else {
          setFavoritСountries((prevCity) => [...prevCity, String(weatherApi?.name)]);
        }
      };

    const moreDetailed = (id: number):void => {
        const filterCity = favoritСountries.filter((_, index) => index === id)
        HandlerApiWeather(String(filterCity).toLowerCase().trim() + ", RU", setWeatherApi)
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
        
        localStorage.setItem("favoritСountries", JSON.stringify(favoritСountries))
    }, [weatherApi, favoritСountries])

    return (
        <div className='h-screen bg-center bg-cover' style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="px-8 py-3" >
                <Header handlerCity={handlerCity} ValueInputCity={ValueInputCity} favoritСountries={favoritСountries} moreDetailed={moreDetailed}/>
                <Main weatherApi={weatherApi} favoritСountries={favoritСountries} handlerfavoritСountries={handlerfavoritСountries}/>
            </div>
        </div>
    )
}

export default App 


