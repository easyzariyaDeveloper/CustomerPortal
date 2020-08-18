import {call, put} from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";



export function* hasActiveCart(){
    try{
        const {data: isActiveCart} = yield call(APIWrapper, {
            method: "GET",
            url: '/cart/hasactivecart',
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

export function* fetchCart(initialFetch = false){
    if(initialFetch){
        yield put({ type: "FETCHING_CART_DATA"});
    }
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

export function* deleteItem({payload}){
    yield put({type: "DELETE_ITEM_INPROGRESS"});
    yield put({ type: "FETCHING_API" });
    try {
        const {data} = yield call(APIWrapper,{
            url: `/cart/deleteitem?itemId=${payload.itemId}`,
            method: "DELETE"
        });
        yield* fetchCart();
    }
    catch(error){
        console.log(error);
        yield put({
            type: 'DELETE_ITEM_FAILED',
            error
        });
        yield put({ type: "FETCHING_API_FAILED" });
    }
}

export function* applyCoupon({payload}){
    yield put({type: "APPLYING_COUPON_INPROGRESS"});
    
    try {
        const { data } = yield call(APIWrapper, {
            url: `/cart/applyvoucher`,
            method: "POST",
            data: {
                "code": payload
            }
        });
        yield* fetchCart();
        yield put({
            type: 'COUPON APPLIED_SUCCESS',
            data: data
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'COUPON APPLIED_FAILED',
            error
        });
        yield* fetchCart();
    }
}


export function* navigateToSelectAddress({payload}){
    yield put({type: "FETCHING_API"});
    const {time} = payload;
    try {
        const { data,status } = yield call(APIWrapper, {
            url: `/cart/setdate`,
            method: "POST",
            data: {
                "date": time
            }
        });
        // if(status === 200){
        //     location.href = "/cart/add-address";
        //     yield put({
        //         type: 'SET_TIME_SUCCESS',
        //     });
        // }
 
        
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCHING_API_FAILED',
            error
        });
    }
}



export function* removeCoupon(){
    yield put({type: "REMOVE_COUPON_INPROGRESS"});

    try {
        const {data} = yield call(APIWrapper,{
            url: `/cart/removevoucher`,
            method: "DELETE"
        });
        yield put({type:"REMOVE_COUPON_SUCCESSFULLY"})
    }
    catch(error){
        console.log(error);
        yield put({
            type: 'REMOVE_COUPON_FAILED',
            error
        });
    }
}