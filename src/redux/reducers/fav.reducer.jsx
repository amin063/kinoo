export const favReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_FAV_LIST":
            const exists = state.some((item) => item.imdbID === action.payload.imdbID);
            if (exists) {
                return state.filter((item) => item.imdbID !== action.payload.imdbID);
            }
            return [...state, action.payload];

        case "DELETE_FAV_ITEM":
            return state.filter((item) => item.imdbID !== action.payload.imdbID);
            case "DELETE_ALL_ITEM":
                return []
        default:
            return state;
    }
}


