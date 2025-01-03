import IconWeather from "./componets/iconWeather";
import WeatherMain from "./componets/weatherMain";
import TypeComponents from "../../../../Type/TypeComponents";


const Weather:React.FC<TypeComponents> = ({weatherApi}) => {
    return ( 
        <div className="flex flex-col justify-center items-center gap-20 md:flex-row">
            <IconWeather weatherApi={weatherApi}/>
            <WeatherMain weatherApi={weatherApi}/>
        </div>
    );
}
 
export default Weather;