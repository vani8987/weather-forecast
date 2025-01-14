import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


const FavoritesMenu = () => {
    const [open, setOpen] = useState<Boolean>(false)

    const HandlerOpen = ():void => {
        setOpen(!open)
    }

    return ( 
        <div className="flex flex-col relative">
            <button onClick={HandlerOpen} className="inline-flex justify-center items-center w-14 h-14">{open ? <IoMdClose  className="w-full"/> : <IoIosMenu className="w-full" />}</button>

            <div className={`absolute w-64 text-white bg-neutral-900 p-5 ${open === true ? `-left-10` : `-left-96`} top-16 z-50 flex flex-col items-center justify-center shadow-castomShadom gap-8 min-h-96 rounded-lg h-full overflow-auto transition-all ease-in overflow-x-hidden scrollbar-hide` }>
                <h1>Список пуст</h1>
            </div>
        </div>  
    );
}
 
export default FavoritesMenu;