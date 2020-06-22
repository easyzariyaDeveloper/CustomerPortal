import { takeLatest } from "redux-saga/effects";
import { fetchPackages } from "../Component/SelectService/Data/saga";

export default function* appSaga() {
    yield takeLatest("REQUEST_PACKAGES_DATA", fetchPackages);
}
