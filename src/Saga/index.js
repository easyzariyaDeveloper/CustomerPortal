import { takeLatest } from "redux-saga/effects";
import { fetchPackages, addRemoveSubPackage } from "../Component/SelectService/Data/saga";
import { fetchBrandForCars, fetchCarListByBrand } from "../Component/AddCar/Data/saga";
import { loginUser } from "../Component/SignUp/Data/saga";

export default function* appSaga() {
    yield takeLatest("REQUEST_PACKAGES_DATA", fetchPackages);
    yield takeLatest("ADD_SUBPACKAGE", addRemoveSubPackage);
    yield takeLatest("REMOVE_SUBPACKAGE", addRemoveSubPackage);
    yield takeLatest("FETCH_BRAND_FOR_CARS", fetchBrandForCars );
    yield takeLatest("FETCH_CAR_LIST_BY_BRAND",fetchCarListByBrand);

    yield takeLatest("LOGIN_USER_WITH_CRENDETIAL", loginUser);
}
