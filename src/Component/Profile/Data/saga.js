import {call, put} from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";
import { setCookie, readCookie } from "../../../util";

export function*  getProfile(){
    yield put({ type: "FETCH_PROFILE_INPROGRESS" });
    try{
        const {data: profileResponse} = yield call(APIWrapper, {
            method: "GET",
            url: '/customer',
        });

        if(profileResponse?.customerId && !readCookie("userUUId")){
            setCookie("userUUId",  profileResponse?.customerId);
        }
        yield put({
            type: 'FETCH_PROFILE_SUCCESS',
            data: profileResponse
        })
    console.log(profileResponse);
    }catch(error){
        console.log(error);
        yield put({
            type: 'FETCH_PROFILE_FAILED',
            error
        });
    }
}