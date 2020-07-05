import {call, put} from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";
import { setCookie, readCookie } from "../../../util";

export function*  getProfile(){
    try{
        const {data: profileResponse} = yield call(APIWrapper, {
            method: "GET",
            url: '/customer/profile',
        });

        if(profileResponse?.data?.customerId && !readCookie("userUUId")){
            setCookie("userUUId",  profileResponse?.data?.customerId);
        }
        yield put({
            type: 'FETCH_PROFILE_SUCCESS',
            data: profileResponse?.data
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