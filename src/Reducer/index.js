import { combineReducers } from "redux"
import PackagesReducer from "../Component/SelectService/Data/reducer";
import ProfileReducer from "../Component/Profile/Data/reducer";

const rootReducer = combineReducers({
    packages: PackagesReducer,
    profile: ProfileReducer
});
export default rootReducer;