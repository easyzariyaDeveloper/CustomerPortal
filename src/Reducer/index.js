import { combineReducers } from "redux"
import PackagesReducer, { CarReducer, CityReducer } from "../Component/SelectService/Data/reducer";
import {SubPackageReducer} from "../Component/SelectService/Data/reducer";
import ProfileReducer from "../Component/Profile/Data/reducer";
import BrandsReducer,{CarModelsReducer} from "../Component/AddCar/Data/reducer";
import { OtpReducer } from "../Component/OtpPage/Data/reducer";
import LoadingReducer from "../Layout/MobileView/loadingReducer";
import {CartReducer} from "../Component/Cart/Data/reducer";

const rootReducer = combineReducers({
    packages: PackagesReducer,
    carList: CarReducer,
    cityList: CityReducer,
    profile: ProfileReducer,
    subPackages: SubPackageReducer,
    brands: BrandsReducer,
    cars: CarModelsReducer,
    otp: OtpReducer,
    loading: LoadingReducer,
    cart: CartReducer
});
export default rootReducer;