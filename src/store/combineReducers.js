import { combineReducers } from "redux";
import { favoriteReducer } from "./reducers/Favorite";
export default combineReducers(
    {
        favorite:favoriteReducer,
    }
)