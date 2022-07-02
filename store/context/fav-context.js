import { createContext, useState } from "react";

export const FavContext = createContext({
    ids : [],
    addFav : (id) => {},
    remFav : (id) => {}
})

function FavContextProvider({children}) {
    const [favMealId, setFavMeaId] = useState([]);

    function addFavs(id) {
        setFavMeaId((prev) => [...prev,id]);
    }
    function remFavs(id) {
        setFavMeaId(prev => 
            prev.filter((meadId) => meadId!==id)); 
    }

    const value = {
        ids : favMealId,
        addFav : addFavs,
        remFav: remFavs,
    }

    return <FavContext.Provider
        value = {value}
    >{children}</FavContext.Provider>
}

export default FavContextProvider;