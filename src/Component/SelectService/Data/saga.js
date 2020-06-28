import { call, put } from "redux-saga/effects";
import { BASE_API_ENDPOINT } from "../../../constant";
import {formatPackageResponse} from "../util";

export function* fetchPackages({payload}) {
    yield put({ type: "FETCH_PACKAGES" });
    try {
        const { data } = yield call(getPackages, payload?.carId);
        yield put({
            type: 'FETCH_PACKAGES_SUCCESS',
            data: formatPackageResponse(data)
        });
    } catch (error) {
        console.log(error);
        yield put({
            type: 'FETCH_PACKAGES_FAILED',
            error
        });
    }
}

async function getPackages(...args) {
    try {
        const response = await fetch(`${BASE_API_ENDPOINT}/packages/active?carId=${args}`);
        return response.json()
    } catch (error) {
        console.log(error);
        /**
         * 
         */
    }
}


export function* addRemoveSubPackage({payload}){
    yield put  ({
        type: "ADD_SUBPACKAGE",
        data : payload?.subPackage,
        code: payload?.code
    })
    yield put({
        type: "REMOVE_SUBPACKAGE",
    })
}