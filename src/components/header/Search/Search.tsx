import { IoIosSearch } from "react-icons/io";

interface TypeSearch{
    handlerCity: (event: React.FormEvent<EventTarget>) => void
    ValueInputCity: any 
}

const Search:React.FC<TypeSearch> = ({handlerCity, ValueInputCity}) => {
    return ( 
        <div className="flex justify-center items-center gap-4 w-full">
            <form onSubmit={handlerCity} className="flex items-center gap-2 bg-blockColor w-full h-11 px-2.5 py-3 rounded-3xl shadow-castomShadom">
                <input 
                type="text" 
                className="bg-activeColor text-textColor rounded-2xl px-4 py-3 h-7 placeholder:text-textColor w-full focus:ring-2 hover:bg-hoverColor transition duration-300 ease-in-out" 
                placeholder="Ведите город в формате 'Название города'"
                ref={ValueInputCity}/>
                <button><IoIosSearch className="text-activeColor h-8 w-8 cursor-pointer"/></button>
            </form>
        </div>
    );
}
 
export default Search;