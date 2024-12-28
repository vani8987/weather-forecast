import Search from "./Search/Search";

interface TypeHeader{
    handlerCity: (event:React.ChangeEvent<HTMLInputElement>) => void
}

const Header:React.FC<TypeHeader> = ({handlerCity}) => {
    return ( 
        <div>
            <Search handlerCity={handlerCity}/>
        </div>
    );
}
 
export default Header;