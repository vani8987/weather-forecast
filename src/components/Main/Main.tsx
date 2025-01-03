import Weather from "./Weather/Weather/Weather";
import TypeComponents from "../../Type/TypeComponents";


const Main:React.FC<TypeComponents> = ({weatherApi}) => {
    return (
        <div className="bg-blockColor py-20 px-20 my-32 text-textColor border-solid border-2 border-activeColor rounded-xl">
            <Weather weatherApi={weatherApi}/>
        </div>
    );
}
 
export default Main;