import { combineReducers } from "redux"
import PackagesReducer from "../Component/SelectService/Data/reducer";

const rootReducer = combineReducers({
    packages: PackagesReducer
});
export default rootReducer;