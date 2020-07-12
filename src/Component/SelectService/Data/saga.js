import { call, put } from "redux-saga/effects";
import { BASE_API_ENDPOINT } from "../../../constant";
import {formatPackageResponse} from "../util";
import APIWrapper from "../../../Constants/ApiWrapper";

export function* fetchPackages({payload}) {
    yield put({ type: "FETCH_PACKAGES" });
    try {
        const { data } = yield call(getPackages, payload?.filter);
        yield put({
            type: 'FETCH_PACKAGES_SUCCESS',
            data: formatPackageResponse(data)
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCH_PACKAGES_FAILED',
            error
        });
    }
}


async function getPackages(...args) {
    let URL = `${BASE_API_ENDPOINT}/packages`;
    if(args.length > 0){
        for(const[type, value] of Object.entries(args[0])){
            URL = URL.includes("?") ? `${URL}&${type}=${value}` : `${URL}?${type}=${value}`;
        }
    }
    try {
        const response = await fetch(`${URL}`);
        return response.json()
    } catch (error) {
        console.log(error);
        /**
         * 
         */
    }
}


export function* fetchCars() {
    yield put({ type: "FETCH_CAR" });
    try {
        const { data } = yield call(APIWrapper, {
            url: "/cars"
        });
        yield put({
            type: 'FETCH_CAR_SUCCESS',
            data: data["data"]
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCH_CAR_FAILED',
            error
        });
    }
}


export function* fetchCities() {
    yield put({ type: "FETCH_CITY" });
    try {
        const { data } = yield call(APIWrapper, {
            url: "/city"
        });
        yield put({
            type: 'FETCH_CITY_SUCCESS',
            data: data["data"]
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCH_CITY_FAILED',
            error
        });
    }
}







export function* addRemoveSubPackage({payload}){
    yield put  ({
        type: "ADD_SUBPACKAGE",
        data : payload?.subPackage,
        code: payload?.code
    })
    yield put({
        type: "REMOVE_SUBPACKAGE",
    })
}