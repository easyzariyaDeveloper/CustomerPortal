import {call, put} from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";



export function* hasActiveCart(){
    try{
        const {data: isActiveCart} = yield call(APIWrapper, {
            method: "GET",
            url: '/cart/hasActiveCart',
        });

        yield put({
            type: "SET_ACTIVE_CART",
            data: isActiveCart
        });

    }catch(error){
        console.log(error);
        yield put({
            type: 'FETCH_PROFILE_FAILED',
            error
        });
    }
}

export function* fetchCart(){
    yield put({ type: "FETCHING_API" });
    try{
        const {data} = yield call(APIWrapper, {
            method: "GET",
            url: '/cart/getactive',
        });

        yield put({
            type: "CART_DATA_SUCCESS",
            data
        });
        yield put({ type: "FETCHING_API_SUCCESS" });
    }catch(error){
        console.log(error);
        yield put({
            type: 'FETCH_PROFILE_FAILED',
            error
        });
        yield put({ type: "FETCHING_API_FAILED" });
    }
}