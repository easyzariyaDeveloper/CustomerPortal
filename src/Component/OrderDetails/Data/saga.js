import {call, put} from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";

export function*  fetchOrderById({payload}){
    yield put({ type: "FETCHING_ORDER_BY_ID_INPROGRESS" });
    try{
        const {data} = yield call(APIWrapper, {
            method: "GET",
            url: `/cart/order/${payload}`,
            data: {
                orderId: payload
        }});
        yield put({
            type: 'FETCHING_ORDER_BY_ID_SUCCESS',
            data
        })
    }catch(error){
        console.log(error);
        yield put({
            type: 'FETCHING_ORDER_BY_ID_FAILED',
            error
        });
        yield put({
            type: 'FETCHING_API_FAILED',
            error: {
                ...error,
                ErrorMessage: "Failed to fetch order detail, try again after sometime"
            }
        });
    }
}