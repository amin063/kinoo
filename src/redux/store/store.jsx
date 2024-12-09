import { combineReducers, createStore } from "redux";
import { favReducer } from "../reducers/fav.reducer";
import { inputValueReducer } from "../reducers/input.value.reducer";

const reducers = combineReducers({
    favList: favReducer,
    inputValue: inputValueReducer   
})

export const globalStore = createStore(reducers)