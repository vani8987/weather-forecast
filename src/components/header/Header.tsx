import FavoritesMenu from "./favoritesMenu/FavoritesMenu";
import Search from "./Search/Search";

interface TypeHeader{
    handlerCity: (event: React.FormEvent<EventTarget>) => void
    ValueInputCity: any
}

const Header:React.FC<TypeHeader> = ({handlerCity, ValueInputCity}) => {
    return ( 
        <div className="flex items-center justify-between gap-5">
            <FavoritesMenu />
            <Search handlerCity={handlerCity} ValueInputCity={ValueInputCity}/>
        </div>
    );
}
 
export default Header;