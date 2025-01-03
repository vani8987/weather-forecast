import Search from "./Search/Search";

interface TypeHeader{
    handlerCity: (event: React.FormEvent<EventTarget>) => void
    ValueInputCity: any
}

const Header:React.FC<TypeHeader> = ({handlerCity, ValueInputCity}) => {
    return ( 
        <div>
            <Search handlerCity={handlerCity} ValueInputCity={ValueInputCity}/>
        </div>
    );
}
 
export default Header;