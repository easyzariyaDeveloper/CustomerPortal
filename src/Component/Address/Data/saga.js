import { call, put } from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";
import { readCookie } from "../../../util";

export function* addAddressByUser({payload}) {
    //const [cname, cvalue] = readCookie("userUUId").split("=");
    yield put({ type: "CUSTOMER_ADD_ADDRESS_INPROGESS" });
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
    } catch (error) {
        console.log(error);
        yield put({
            type: 'CUSTOMER_ADD_ADDRESS_FAILED',
            error
        });
    }
}

export function* updateCustomerAddress({payload}){
    yield put({ type: "FETCHING_API_INPROGRESS" });

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
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCHING_API_FAILED',
            error
        })

    }
}





