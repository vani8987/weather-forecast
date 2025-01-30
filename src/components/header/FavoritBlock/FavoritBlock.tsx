import React from 'react';
interface TypeComponentFavoriteBlock {
    favoritСountries: string | null
    moreDetailed: (id: number) => void
    id: number
}

const FavoritesBlock:React.FC<TypeComponentFavoriteBlock> = ({favoritСountries, moreDetailed, id}) => {
    return ( 
        <div className="flex flex-col items-center gap-12 w-full bg-blockColor p-3 rounded-lg shadow-castomShadom animate-fadeinleft" data-testId='Block'>
            <h1 className="text-2xl">{favoritСountries}</h1>
            <button className="bg-activeColor w-full rounded-2xl hover:bg-hoverColor" onClick={() => moreDetailed(id)}>Подробнее</button>
        </div>
    );
}
 
export default FavoritesBlock;