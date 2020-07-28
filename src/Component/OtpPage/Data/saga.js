import { call, put } from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";


export function* getOtp({payload}) {
    try {
        const { data } = yield call(APIWrapper, {
            url: `/otp`,
            method: "POST",
            data: {
                "phone": payload.phone
            }
        });
        yield put({
            type: 'FETCH_OTP_SUCCESS',
            data: data
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCH_OTP_FAILED',
            error
        });
    }
}
