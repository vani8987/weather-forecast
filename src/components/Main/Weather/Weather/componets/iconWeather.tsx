import React from "react";
import TypeComponents from "../../../../../Type/TypeComponents";


const IconWeather:React.FC<TypeComponents > = ({weatherApi}) => {
    const iconURL = `https://openweathermap.org/img/wn/${weatherApi?.weather[0].icon}@2x.png`
    return ( 
        <div>
            <img src={iconURL} className="w-28"/>
        </div>
    )
}
 
export default IconWeather;