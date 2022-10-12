import { combineReducers } from "redux";
import mainReducer from "./reducer";

const rootReducer = combineReducers({
    hobby: mainReducer,
})
export default rootReducer;