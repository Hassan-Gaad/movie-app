import { combineReducers } from "redux";
import { favoriteReducer } from "./reducers/Favorite";
import { loaderReducer } from "./reducers/Loader";
import moviesReducer from "./reducers/Movies";
export default combineReducers(
    {
        favorite:favoriteReducer,
        loader:loaderReducer,
        movies:moviesReducer
    }
)