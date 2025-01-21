import FavoritesMenu from "./favoritesMenu/FavoritesMenu";
import Search from "./Search/Search";

interface TypeHeader{
    handlerCity: (event: React.FormEvent<EventTarget>) => void
    ValueInputCity: any
    favoritСountries: string[]
    moreDetailed: (id: number) => void
}

const Header:React.FC<TypeHeader> = ({handlerCity, ValueInputCity, favoritСountries, moreDetailed}) => {
    return ( 
        <div className="flex items-center justify-between gap-5">
            <FavoritesMenu favoritСountries={favoritСountries} moreDetailed={moreDetailed}/>
            <Search handlerCity={handlerCity} ValueInputCity={ValueInputCity}/>
        </div>
    );
}
 
export default Header;