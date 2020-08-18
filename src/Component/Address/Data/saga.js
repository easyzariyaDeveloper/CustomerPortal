import { call, put } from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";
import { readCookie } from "../../../util";

export function* addAddressByUser({payload}) {
    //const [cname, cvalue] = readCookie("userUUId").split("=");
    yield put({ type: "CUSTOMER_ADD_ADDRESS_INPROGESS" });
    yield put({ type: "FETCHING_API" });
    //console.log(cvalue);
    try {
        const { data } = yield call(APIWrapper, {
            url: `/customer/address`,
            method: "POST",
            data: {
                ...payload
            }
        });
        yield put({
            type: 'CUSTOMER_ADD_ADDRESS_SUCCESS',
            data: data
        });
        const referrer = new URLSearchParams(window.location.search).get("referrer");
        if(referrer){
            location.href = `${referrer}`;
        }
        yield put({ type: "FETCHING_API_SUCCESS" });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'CUSTOMER_ADD_ADDRESS_FAILED',
            error
        });
        yield put({ type: "FETCHING_API_FAILED" });
    }
}

export function* updateCustomerAddress({payload}){
    yield put({ type: "FETCHING_API_INPROGRESS" });
    yield put({ type: "FETCHING_API" });

    try {
        const { data } = yield call(APIWrapper, {
            url: `/customer/address/${payload.addressId}`,
            method: "PUT",
            data: payload.updatedAddress
        });
        yield put({
            type: 'CUSTOMER_UPDATE_ADDRESS_SUCCESS',
            data: data
        });
        yield put({ type: "FETCHING_API_SUCCESS" });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCHING_API_FAILED',
            error
        });
    }
}





