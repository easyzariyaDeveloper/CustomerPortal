import {call, put} from "redux-saga/effects";
import qs from "querystring";
import APIWrapper from "../../../Constants/ApiWrapper";

export function* loginUser({payload}){
    yield put({type: "SHOW_LOADER"});
    try {
        const { data } = yield call(APIWrapper, {
            method: "POST",
            url: `oauth/token`,
            data: qs.stringify({
                username: payload?.user,
                password: payload?.password,
                grant_type: "password"
            }),
            headers : {
                "Authorization": "Basic ZWFzeXphcml5YTpzZWNyZXQ=",
                "Content-Type":'application/x-www-form-urlencoded'  
            }
        });

        yield put({
            type: 'USER_LOGGEDIN_SUCCESSFULLY'
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'USER_LOGGEDIN_SUCCESSFULLY_FAILED',
            error
        });
    }
}


export function* userSignup({payload}){
    yield put({type: "SHOW_LOADER"});
    
    try {
        const { data, status } = yield call(APIWrapper, {
            method: "POST",
            url: `/customer/signup`,
            data: {
                userName: payload?.name,
                email: payload?.email,
                primaryPhone: payload?.phone,
                password: payload?.password,
            }
        });
        yield put({
            type: 'USER_SIGNEDUP_SUCCESSFULLY'
        });
        if(status === 201){
            sessionStorage.setItem("otpMobileNumber", payload?.phone);
            window.location.href = "/otp";
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: 'USER_SIGNEDUP_SUCCESSFULLY_FAILED',
            error
        });
    }
}