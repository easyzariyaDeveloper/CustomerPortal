import { combineReducers } from "redux"
import PackagesReducer from "../Component/SelectService/Data/reducer";
import {SubPackageReducer} from "../Component/SelectService/Data/reducer";
import ProfileReducer from "../Component/Profile/Data/reducer";
import BrandsReducer,{CarModelsReducer} from "../Component/AddCar/Data/reducer";

const rootReducer = combineReducers({
    packages: PackagesReducer,
    profile: ProfileReducer,
    subPackages: SubPackageReducer,
    brands: BrandsReducer,
    cars: CarModelsReducer
});
export default rootReducer;