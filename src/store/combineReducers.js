import { combineReducers } from "redux";
import { favoriteReducer } from "./reducers/Favorite";
import { loaderReducer } from "./reducers/Loader";
export default combineReducers(
    {
        favorite:favoriteReducer,
        loader:loaderReducer,
    }
)