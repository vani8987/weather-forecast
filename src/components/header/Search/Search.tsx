import { IoIosSearch } from "react-icons/io";

const Search:React.FC = () => {

    return ( 
        <div className="flex items-center gap-2 bg-blockColor w-full h-11 px-2.5 py-3 rounded-3xl shadow-castomShadom">
            <input 
            type="text" 
            className="bg-activeColor text-textColor rounded-2xl px-4 py-3 h-7 placeholder:text-textColor w-full focus:ring-2 hover:bg-hoverColor transition duration-300 ease-in-out" 
            placeholder="Ведите город в формате 'Название города, RU или другое индекс выбранной страны'"/>
            <IoIosSearch className="text-activeColor h-8 w-8 cursor-pointer"/>
        </div>
    );
}
 
export default Search;