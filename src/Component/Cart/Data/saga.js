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

export function * deleteItem({payload}){
    yield put({type: "DELETE_ITEM_INPROGRESS"});
    try {
        const {data} = yield call(APIWrapper,{
            url: `/cart/deleteitem`,
            method: "DELETE",
            data: {
                itemId: payload.itemId
            }
        });
        yield put({
            type: 'DELETE_ITEM',
            data
        });
    }
    catch(error){
        yield put({
            type: 'DELETE_ITEM_FAILED',
            error
        });
    }
}


