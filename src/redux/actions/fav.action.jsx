export const addFav = (payload) => {
    return {
        type: "ADD_FAV_LIST",
        payload: payload
    }
}

export const deleteFavItem = (payload) => {
    return {
        type: "DELETE_FAV_ITEM",
        payload: payload
    }
}