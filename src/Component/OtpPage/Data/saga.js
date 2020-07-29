import { call, put } from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";


export function* createOtp({payload}) {
    try {
        const { data } = yield call(APIWrapper, {
            url: `customer/otp/verify_customer`,
            method: "POST",
            data: {
                "customerId": payload
            }
        });
        yield put({
            type: 'CREATE_OTP_SUCCESS',
            data: data
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'CREATE_OTP_FAILED',
            error
        });
    }
}

export function* verifyOTP({customerId, otpValue}) {
    try {
        const { data } = yield call(APIWrapper, {
            url: `customer/otp/verify_customer`,
            method: "POST",
            data: {
                "customerId": customerId,
                "otp": otp
            }
        });
        yield put({
            type: 'CREATE_OTP_SUCCESS',
            data: data
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'CREATE_OTP_FAILED',
            error
        });
    }
}


