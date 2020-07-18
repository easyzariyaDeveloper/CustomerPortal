import { takeLatest } from "redux-saga/effects";
import { fetchPackages, fetchCars, fetchCities, fetchPackageById, addSubPackage } from "../Component/SelectService/Data/saga";
import { fetchBrandForCars, fetchCarListByBrand, addCarByUser, getCarById} from "../Component/AddCar/Data/saga";
import { loginUser, userSignup } from "../Component/SignUp/Data/saga";
import { getProfile } from "../Component/Profile/Data/saga";
import { getOtp } from "../Component/OtpPage/Data/saga";
import { addAddressByUser } from "../Component/Address/Data/saga";


export default function* appSaga() {
    yield takeLatest("REQUEST_PACKAGES_DATA", fetchPackages);
    yield takeLatest("REQUEST_PACKAGES_DATA_BY_ID", fetchPackageById);
    yield takeLatest("REQUEST_CAR", fetchCars);
    yield takeLatest("REQUEST_CITY", fetchCities);
    yield takeLatest("ADD_SUBPACKAGE",addSubPackage);

    yield takeLatest("FETCH_BRAND_FOR_CARS", fetchBrandForCars );
    yield takeLatest("FETCH_CAR_LIST_BY_BRAND",fetchCarListByBrand);
    yield takeLatest("FETCH_CAR_BY_ID", getCarById);

    yield takeLatest("LOGIN_USER_WITH_CRENDETIAL", loginUser);
    yield takeLatest("SIGNUP_USER_DETAILS", userSignup);

    yield takeLatest("FETCH_PROFILE", getProfile);
    yield takeLatest("FETCH_OTP", getOtp);
    yield takeLatest("CUSTOMER_ADD_ADDRESS", addAddressByUser);
    yield takeLatest("CUSTOMER_ADD_CAR", addCarByUser);
}
