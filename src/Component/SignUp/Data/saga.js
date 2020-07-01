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
                username: payload?.email,
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