import { call, put } from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";
import { readCookie } from "../../../util";


export function* fetchBrandForCars() {
    yield put({ type: "FETCH_BRAND" });
    try {
        const { data } = yield call(APIWrapper, {
            url: "/cars/brands"
        });
        yield put({
            type: 'FETCH_BRAND_SUCCESS',
            data: data
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCH_BRAND_FAILED',
            error
        });
    }
}

export function* fetchCarListByBrand({payload}) {
    yield put({ type: "FETCH_CAR_MODEL" });
    try {
        const { data } = yield call(APIWrapper, {
            url: `/cars/brand?brand=${payload?.brand}`
        });
        yield put({
            type: 'FETCH_CAR_MODEL_SUCCESS',
            data: data
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCH_CAR_MODEL_FAILED',
            error
        });
    }
}



export function* addCarByUser({payload}) {
    yield put({ type: "CUSTOMER_ADD_CAR_INPROGESS" });
    try {
        const { data } = yield call(APIWrapper, {
            url: `/customer/car`,
            method: "POST",
            data: {
                ...payload
            }
        });
        yield put({
            type: 'CUSTOMER_ADD_CAR_SUCCESS',
            data: data
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'CUSTOMER_ADD_CAR_FAILED',
            error
        });
    }

}





