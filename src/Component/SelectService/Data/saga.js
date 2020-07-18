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
            data: data
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
            data: data
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCH_CITY_FAILED',
            error
        });
    }
}

export function* fetchPackageById({payload, filter = {}}) {
    yield put({ type: "FETCH_PACKAGES" });

    let URL = `/packages/${payload?.packageId}`;
    if(Object.values(filter).length > 0){
        for(const[type, value] of Object.entries(args[0])){
            URL = URL.includes("?") ? `${URL}&${type}=${value}` : `${URL}?${type}=${value}`;
        }
    }
    try {
        const { data } = yield call(APIWrapper, {
            url: URL  
        });
        yield put({
            type: 'FETCH_PACKAGES_SUCCESS',
            data: formatPackageResponse([data])
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCH_PACKAGES_FAILED',
            error
        });
    }
}


export function* addSubPackage({payload}){
    yield put({type: "SHOW_LOADER"});
    
    try {
        const { data, status } = yield call(APIWrapper, {
            method: "POST",
            url: `/cart/additem`,
            data: {
                car: payload?.car,
                cityId: payload?.cityId,
                itemIdObj: payload?.itemIdObj
            }
        });
        yield put({
            type: 'ADDED_TO_CART'
        });

    } catch (error) {
        console.log(error);
        yield put({
            type: 'ADDED_CART_FAILED',
            error
        });
    }
}