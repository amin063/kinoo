import { combineReducers, createStore } from "redux";
import { favReducer } from "../reducers/fav.reducer";
import { inputValueReducer } from "../reducers/input.value.reducer";
import { userReducer } from "../reducers/user.reducer";

const reducers = combineReducers({
    favList: favReducer,
    inputValue: inputValueReducer,   
    userDetails: userReducer
})

export const globalStore = createStore(reducers)