import { combineReducers } from "redux";
import searchText from "./searchText";
import searchList from './searchList';

export default combineReducers({
    searchText,
    searchList
})