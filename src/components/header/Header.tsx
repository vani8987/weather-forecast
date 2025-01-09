import Search from "./Search/Search";

interface TypeHeader{
    handlerCity: (event: React.FormEvent<EventTarget>) => void
    ValueInputCity: any
}

const Header:React.FC<TypeHeader> = ({handlerCity, ValueInputCity}) => {
    return ( 
        <div className="">
            <Search handlerCity={handlerCity} ValueInputCity={ValueInputCity}/>
        </div>
    );
}
 
export default Header;