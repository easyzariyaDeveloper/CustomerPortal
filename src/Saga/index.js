import { takeLatest } from "redux-saga/effects";
import { fetchPackages, addRemoveSubPackage } from "../Component/SelectService/Data/saga";
import { fetchBrandForCars, fetchCarListByBrand } from "../Component/AddCar/Data/saga";
import { loginUser, userSignup } from "../Component/SignUp/Data/saga";
import { getProfile } from "../Component/Profile/Data/saga";
import { addAddressByUser } from "../Component/Address/Data/saga";

export default function* appSaga() {
    yield takeLatest("REQUEST_PACKAGES_DATA", fetchPackages);
    yield takeLatest("ADD_SUBPACKAGE", addRemoveSubPackage);
    yield takeLatest("REMOVE_SUBPACKAGE", addRemoveSubPackage);
    yield takeLatest("FETCH_BRAND_FOR_CARS", fetchBrandForCars );
    yield takeLatest("FETCH_CAR_LIST_BY_BRAND",fetchCarListByBrand);

    yield takeLatest("LOGIN_USER_WITH_CRENDETIAL", loginUser);
    yield takeLatest("SIGNUP_USER_DETAILS", userSignup);

    yield takeLatest("FETCH_PROFILE", getProfile);
    yield takeLatest("CUSTOMER_ADD_ADDRESS", addAddressByUser);
}
