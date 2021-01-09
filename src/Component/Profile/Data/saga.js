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
        const { data,status } = yield call(APIWrapper, {
            url: `/customer/car/${payload}`,
            method: "DELETE"
        });
        if(status == 200){
            yield *getProfile()
        }
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
    yield put ({type: "FETCHING_API"});

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
        yield put({type: "PASSWORD_CHANGED"})
    }catch (error) {
        console.log(error);
        yield put({
            type: 'FETCHING_API_FAILED',
            error
        });
    }
    
}

export function* deleteAddress({payload}){
    yield put ({type: "DELETE_ADDRESS_INPROGRESS"});
    try{
        const { data, status } = yield call(APIWrapper, {
            url: `/customer/address/${payload}`,
            method: "DELETE"
        });

        if(status == 200) {
            yield put({
                type: 'DELETING_ADDRESS_SUCCESS'
            });
            yield put ({
                type: 'FETCHING_API_SUCCESS'
            })
            location.href = '/profile'
        }
        
    }catch (error) {
        console.log(error);
        yield put({
            type: 'DELETING_ADDRESS_FAILED',
            error
        });
    }
    
}

export function*  fetchOrderHistory(){
    yield put({ type: "FETCHING_ORDER_HISTORY_INPROGRESS" });
    try{
        const {data} = yield call(APIWrapper, {
            method: "GET",
            url: '/cart/getorders',
        });
        yield put({
            type: 'FETCH_ORDER_HISTORY_SUCCESS',
            data
        })
    }catch(error){
        console.log(error);
        yield put({
            type: 'FETCH_ORDER_HISTORY_FAILED',
            error
        });
    }
}

export function*  downloadJobCard({payload}){
    yield put({ type: "DOWNLOAD_JOBCARD_INPROGRESS" });
    try{
        const {data} = yield call(APIWrapper, {
            method: "GET",
            url: `/job-card/${payload}/download`,
        });
        yield put({
            type: 'DOWNLOAD_JOBCARD_SUCCESS',
            data
        })
    }catch(error){
        console.log(error);
        yield put({
            type: 'DOWNLOAD_JOBCARD_FAILED',
            error
        });
    }
}





