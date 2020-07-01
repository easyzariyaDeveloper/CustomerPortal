import {call, put} from "redux-saga/effects";
import { BASE_API_ENDPOINT } from "../../../constant";
import APIWrapper from "../../../Constants/ApiWrapper";

export function* loginUser({payload}){
    yield put({type: "SHOW_LOADER"});
    try {
        const { data } = yield call(APIWrapper, {
            method: "POST",
            url: `${BASE_API_ENDPOINT}/oauth/token`,
            data: {
                ...payload
            },
            headers : {
                "Authorization": "Basic ZWFzeXphcml5YTpzZWNyZXQ="
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