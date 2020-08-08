import {call, put} from "redux-saga/effects";
import APIWrapper from "../../../../Constants/ApiWrapper";


export function* createOrder({payload}){
    yield put({ type: "FETCHING_API" });
    try{
        const {data} = yield call(APIWrapper, {
            method: "GET",
            url: `/cart/initiatePayment?mode=${payload}`,
        });
        yield put({ type: "FETCHING_API_SUCCESS" });
        if(payload === "WAITING_FOR_COD" && data?.orderId){
            location.href = "/";
        }
    }catch(error){
        console.log(error);
        yield put({
            type: 'CREATE_ORDER_FAILED',
            error
        });
        yield put({ type: "FETCHING_API_FAILED" });
    }
}