import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import TypeComponents from "../../../Type/TypeComponents";
import React from "react"


const IconWeather:React.FC<TypeComponents> = ({weatherApi}) => {
    return ( 
        <div className="py-9">
            {weatherApi === null ? (
                <div data-testid="SkeletonIcon">
                    <Skeleton width={150} height={150} baseColor="#818181" highlightColor="#5a5a5a" duration={3}/>
                </div>   
            ) : (
                <img src={`https://openweathermap.org/img/wn/${weatherApi?.weather[0]?.icon}@2x.png`} width={150} height={150} data-testid="ImgWeather"/>
            )}
        </div>
    );
}
 
export default IconWeather;