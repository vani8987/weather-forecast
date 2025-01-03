import React from "react";
import TypeComponents from "../../../../../Type/TypeComponents";


const WeatherMain:React.FC<TypeComponents> = ({weatherApi}) => {
    return ( 
        <div className="">
            <h1>температура: {weatherApi?.main?.temp}</h1>
            <h1>описание: {weatherApi?.weather[0]?.description}</h1>
        </div>
    );
}
 
export default WeatherMain;