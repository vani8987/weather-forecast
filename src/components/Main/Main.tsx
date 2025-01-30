import IconWeather from "./IconWeather/IconWeather";
import WeatherTemp from "./Weather/Weather";
import TypeWeather from "../../Type/TyepWeather";
import { CiHeart } from "react-icons/ci";
import { FaHeartCircleCheck } from "react-icons/fa6";

interface TypeComponentsMain {
    weatherApi: TypeWeather | null
    favoritСountries: string[]
    handlerfavoritСountries: () => void
}


const Main:React.FC<TypeComponentsMain> = ({weatherApi, favoritСountries, handlerfavoritСountries}) => {
    return (
        <div className="h-96 flex justify-center items-center my-48">
            <div className="min-w-72 max-w-xl w-full bg-blockColor flex flex-col justify-center items-center text-textColor rounded-2xl p-7 shadow-castomShadom 
            relative">
                {weatherApi === null ? (
                    <h1 className='text-xl md:text-3xl'>введите название города</h1>
                ) : (
                    <h1 className='text-xl md:text-3xl'>{weatherApi?.name}</h1>
                )}
                <IconWeather weatherApi={weatherApi}/>
                <WeatherTemp weatherApi={weatherApi}/>
                <button onClick={handlerfavoritСountries} className="inline-flex absolute right-4 top-4 w-10 h-10">
                    {weatherApi === null ? (
                        null
                    ) : (favoritСountries.includes(String(weatherApi?.name)) ? (
                        <FaHeartCircleCheck className="w-full pointer-events-none"/>
                    ) : (
                        <CiHeart className="w-full pointer-events-none"/>
                    ))}
                </button>

                
            </div>
        </div>
    );
}
 
export default Main;