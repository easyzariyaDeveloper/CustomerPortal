import { call, put } from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";


export function* fetchBrandForCars() {
    yield put({ type: "FETCHING_BRAND_API" });
    try {
        const { data } = yield call(APIWrapper, {
            url: "/cars/brands"
        });
        yield put({
            type: 'FETCHING_API_SUCCESS',
        });
        yield put({
            type: "FETCHED_BRAND_SUCCESS",
            data: data
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCHED_BRAND_FAILED',
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
            data
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCH_CAR_MODEL_FAILED',
            error
        });
    }
}



export function* addCarByUser({payload, callback}) {
    yield put({ type: "CUSTOMER_ADD_CAR_INPROGESS" });
    yield put({ type: "FETCHING_API"});
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
            data
        });
        callback && callback(data);
        yield put({type: "FETCHING_API_SUCCESS"});
    } catch (error) {
        console.log(error);
        yield put({
            type: 'CUSTOMER_ADD_CAR_FAILED',
            error
        });
        yield put({
            type: 'FETCHING_API_FAILED',
            error
        })
    }

}

export function* updateCarDetail({payload, callback, id}) {
    yield put({ type: "CUSTOMER_ADD_CAR_INPROGESS" });
    try {
        const { data } = yield call(APIWrapper, {
            url: `/customer/car/${id}`,
            method: "PUT",
            data: {
                ...payload
            }
        });
        yield put({
            type: 'CUSTOMER_UPDATE_CAR_SUCCESS',
            data
        });
        console.log(data);
        callback && callback()
    } catch (error) {
        console.log(error);
        yield put({
            type: 'CUSTOMER_ADD_CAR_FAILED',
            error
        });
        yield put({
            type: 'FETCHING_API_FAILED',
            error
        })
    }

}

export function* getCarById({payload, callBack}){
    yield put({type: "FETCHING_CAR_DETAILS_INPROGRESS"});
    try{
        const {data} = yield call(APIWrapper,{
            url:`/cars/${payload}`
        });
        if(data["id"]){
            yield put({
                type: 'FETCH_BRAND_SUCCESS',
                data: [data["brand"]]
            });
            yield put({
                type: 'FETCH_CAR_MODEL_SUCCESS',
                data: [data]
            });
            callBack(data);
        }
    }
    catch(error){
            yield put({
                type: 'FETCH_CAR_BY_ID_FAILED',
                error
        });
    }
}





