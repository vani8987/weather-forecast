import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import TypeComponents from "../../../Type/TypeComponents";
import React from "react";



const WeatherTemp:React.FC<TypeComponents> = ({weatherApi}) => {

    return ( 
        <div className="py-5 w-full px-5 ">
            <div className="flex flex-col items-center gap-10 md:justify-between md:flex-row">
                <div className="relative flex gap-2">
                    {weatherApi === null ? (
                        <div data-testid="SkeletonTemp">
                            <Skeleton  width={50} height={50} baseColor="#818181" highlightColor="#5a5a5a" duration={3}/>
                        </div>
                    ) : (
                        <h1 className='text-6xl' data-testid="dataTemp">{Math.floor((Number(weatherApi?.main?.temp)))}</h1>
                    )}
                    <p className='text-6xl'>C</p>
                    <div className="absolute w-3 h-3 border-textColor border-2 rounded-full -top-1 -right-5"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-5 md:py-2">
                    {weatherApi === null ? (
                        <div data-testid="SkeletonDescription">
                            <Skeleton  width={200} height={30} baseColor="#818181" highlightColor="#5a5a5a" duration={3}/>
                        </div>
                    ) : (
                        <p className='text-2xl' data-testid="dataDescription">{weatherApi?.weather[0].description}</p>
                    )}
                    <div className="relative flex items-center gap-1">
                        {weatherApi === null ? (
                            <p className='text-2xl flex gap-2'>
                                ощущаеться как: 
                                <div data-testid="SkeletonItFeelsLike">
                                    <Skeleton  width={50} height={30} baseColor="#818181" highlightColor="#5a5a5a" duration={3}/>
                                </div>
                            </p>
                        ) : (
                            <p className='md:text-2xl text-xl'data-testid="dataItFeelsLike">ощущаеться как: {Math.floor((Number(weatherApi?.main?.feels_like)))}</p>
                        )}
                        <p className='text-3xl'>C</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

 
export default WeatherTemp;