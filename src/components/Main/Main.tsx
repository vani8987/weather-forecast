import TypeComponents from "../../Type/TypeComponents";
import IconWeather from "./IconWeather/IconWeather";
import WeatherTemp from "./Weather/Weather";


const Main:React.FC<TypeComponents> = ({weatherApi}) => {
    return (
        <div className="h-96 flex justify-center items-center my-48">
            <div className="min-w-72 max-w-xl w-full bg-blockColor flex flex-col justify-center items-center text-textColor rounded-2xl p-7 shadow-castomShadom">
                {weatherApi === null ? (
                    <h1 className='text-xl md:text-3xl'>введите название города</h1>
                ) : (
                    <h1 className='text-xl md:text-3xl'>{weatherApi?.name}</h1>
                )}
                <IconWeather weatherApi={weatherApi}/>
                <WeatherTemp weatherApi={weatherApi}/>
            </div>
        </div>
    );
}
 
export default Main;