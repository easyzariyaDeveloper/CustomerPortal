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
            type: 'FETCHING_API_FAILED',
            error
        });
    }
}

export function* verifyOTP({customerId, otpValue}) {
    try {
        const { data } = yield call(APIWrapper, {
            url: `customer/otp/match_otp_verify`,
            method: "POST",
            data: {
                "customerId": customerId,
                "otp": otpValue
            }
        });
        yield({
            type: "SHOW_NOTIFICATION",
            message: "Suceessfully Verified !! Login again"
        });
        setTimeout(() => {
            location.href = "/login";
        },1000);
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCHING_API_FAILED',
            error
        });
    }
}


