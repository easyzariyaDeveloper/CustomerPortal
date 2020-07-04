import { combineReducers } from "redux"
import PackagesReducer, { CarModelsReducerInServices } from "../Component/SelectService/Data/reducer";
import {SubPackageReducer, BrandsReducerInServices} from "../Component/SelectService/Data/reducer";
import ProfileReducer from "../Component/Profile/Data/reducer";
import BrandsReducer,{CarModelsReducer} from "../Component/AddCar/Data/reducer";

const rootReducer = combineReducers({
    packages: PackagesReducer,
    profile: ProfileReducer,
    subPackages: SubPackageReducer,
    brands: BrandsReducer,
    cars: CarModelsReducer,
    brandsInServices: BrandsReducerInServices,
    carsInServices: CarModelsReducerInServices
});
export default rootReducer;