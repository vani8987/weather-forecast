import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import FavoritesBlock from "../FavoritBlock/FavoritBlock";
import React from "react"



interface TypeComponentFavoriteMenu {
    favoritСountries: string[]
    moreDetailed: (id: number) => void
}

const FavoritesMenu:React.FC<TypeComponentFavoriteMenu> = ({favoritСountries, moreDetailed}) => {
    const [open, setOpen] = useState<Boolean>(false)

    const HandlerOpen = ():void => {
        setOpen(!open)
    }

    const favoritOneBlock = favoritСountries.map((favoritСountries, index:number) => {
        return <FavoritesBlock favoritСountries={favoritСountries} key={index} moreDetailed={moreDetailed} id={index}/>
    })

    return ( 
        <div className="flex flex-col relative">
            <button onClick={HandlerOpen} className="inline-flex justify-center items-center w-14 h-14">{open ? <IoMdClose  className="w-full"/> : <IoIosMenu className="w-full" />}</button>

            <div className={`absolute w-64 text-white bg-neutral-900 py-14 px-5 ${open === true ? `-left-10` : `-left-80`} ${favoritСountries.length === 0 ? `justify-center` : ``} top-20 z-50 flex flex-col items-center  shadow-castomShadom gap-6 min-h-96 rounded-lg h-full overflow-auto transition-all ease-in overflow-x-hidden scrollbar-hide` } data-testid="menu">
                <h1 className={`ease-out transition-all absolute ${favoritСountries.length === 0 ? `top-36` : `top-4`}`}>Ваши избранные города</h1>
                {favoritСountries.length === 0 ? (
                    <h1>Список пуст</h1>
                ) : (
                    favoritOneBlock
                )}
            </div>
        </div>  
    );
}
 
export default FavoritesMenu;