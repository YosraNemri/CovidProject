import { combineReducers } from "redux";
import userReducer from "./user";
import ContactReducer from "./ContactReducer";
const rootReducer = combineReducers({ userReducer, ContactReducer });
export default rootReducer;
