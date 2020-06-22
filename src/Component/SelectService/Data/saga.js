import {call, put} from "redux-saga/effects";
import { BASE_API_ENDPOINT, API_ENDPOINT } from "../../../constant";

export function* fetchPackages({carId = ""}){
    yield put({ type: "FETCH_PACKAGES"});
    try {
        const {data}  = yield call(getPackages, carId);
        /**
         * Pass through Formatter function
         */
        yield put({
            type: 'FETCH_PACKAGES_SUCCESS', 
            data
        })
    } catch (error){
        console.log(error);
        yield put({
            type: 'FETCH_PACKAGES_FAILED',
            error
        });
    }
}

async function getPackages(...args){
    try {
        const response = await fetch(`${BASE_API_ENDPOINT}/packages/`);
        return response.json()
    } catch(error){
        console.log(error);
        /**
         * 
         */
    }
}