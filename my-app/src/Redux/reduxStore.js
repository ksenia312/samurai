import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import navReducer from "./navReducer";


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogsPage: dialogReducer,
        navFriends: navReducer
    }
);
let store = createStore(reducers);
export default store