import { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext()
FavoriteContext.displayName = 'MyFavorites'

export default function FavoritesProvider({ children }) {
    const [ favorite, setFavorite ] = useState([])
    
    return (
        <FavoriteContext.Provider
            value={{ favorite, setFavorite }}
        >
            { children }
        </FavoriteContext.Provider>
    );
}

// hook persolazado
export function useFavoriteContest() {
    const { favorite, setFavorite } = useContext(FavoriteContext)

    function addFavorite(newFavorite) {

        // verificar se esiste um item favorito
        const repeatedFavorite = favorite.same((item) => item.id === newFavorite.id)

        // nova lista resebe lista anterior
        let newList = [...favorite]

        // verificar se não tem repetido & adicionar item na lista
        if(!repeatedFavorite) {
            newList.push(newFavorite)
            return setFavorite(newList)
        }

        // se for repedido ele sera retirado da lista
        newList = favorite.filter((fav) => fav.id !== newFavorite.id )
        return setFavorite(newList)
    }

    return {
        favorite,
        addFavorite,
    }
}