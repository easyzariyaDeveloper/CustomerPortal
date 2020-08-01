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
            setCookie("isVerifiedUser", profileResponse?.verified);
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


export function* deleteCar({payload}){
    yield put ({type: "DELETE_CAR_INPROGRESS"});
    try{
        const { data } = yield call(APIWrapper, {
            url: `/customer/car/${payload}`,
            method: "DELETE"
        });
        yield put({
            type: 'DELETING_CAR_SUCCESS'
        });
    }catch (error) {
        console.log(error);
        yield put({
            type: 'DELETING_CAR_FAILED',
            error
        });
    }
    
}

export function* changePassword({payload}){
    yield put ({type: "CHANGE_PASSWORD_INPROGRESS"});
    try{
        const { data } = yield call(APIWrapper, {
            url: `/customer/changepassword`,
            method: "PUT",
            data: {
                "oldPassword": payload?.oldPassword,
                "newPassword": payload?.newPassword
            }
        });
        yield put({
            type: 'FETCHING_API_SUCCESS'
        });
    }catch (error) {
        console.log(error);
        yield put({
            type: 'FETCHING_API_FAILED',
            error
        });
    }
    
}




