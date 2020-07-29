import {call, put} from "redux-saga/effects";
import qs from "querystring";
import APIWrapper from "../../../Constants/ApiWrapper";
import {getProfile}  from "../../Profile/Data/saga";

export function* loginUser({payload, search = ""}){
    yield put({type: "FETCHING_API"});
    try {
        const { data, status } = yield call(APIWrapper, {
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
        if(status === 200){
            yield getProfile();
            yield put({
                type: 'USER_LOGGEDIN_SUCCESSFULLY'
            });
            yield put({
                type: 'FETCHING_API_SUCCESS'
            });
            const referrerArray = search.split("referrer=");
            if(referrerArray.length > 0){
                location.href = referrerArray[1] || "/";
            } else {
                location.href = "/";
            }
        }
    } catch (error) {
        yield put({
            type: 'FETCHING_API_FAILED',
            error: error
        })
    }
}


export function* userSignup({payload}){
    yield put({type: "FETCHING_API"});
    
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
            type: 'FETCHING_API_SUCCESS'
        });
        if(status === 201){
            sessionStorage.setItem("otpMobileNumber", payload?.phone);
            window.location.href = "/otp";
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCHING_API_FAILED',
            error
        });
    }
}




