import { call, put } from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";


export function* getOtp({payload}) {
    yield put({ type: "FETCH_OTP" });
    try {
        const { data } = yield call(APIWrapper, {
            url: `/otp/${payload.phone}`
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
