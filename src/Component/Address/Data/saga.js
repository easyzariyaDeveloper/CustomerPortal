import { call, put } from "redux-saga/effects";
import APIWrapper from "../../../Constants/ApiWrapper";
import { readCookie } from "../../../util";

export function* addAddressByUser({payload}) {
    const [cname, cvalue] = readCookie("userUUId").split("=");
    if(cvalue){
        yield put({ type: "CUSTOMER_ADD_ADDRESS_INPROGESS" });
        console.log(cvalue);
        try {
            const { data } = yield call(APIWrapper, {
                url: `/customer/${cvalue}/address`,
                method: "POST",
                data: {
                    ...payload
                }
            });
            yield put({
                type: 'CUSTOMER_ADD_ADDRESS_SUCCESS',
                data: data
            });
        } catch (error) {
            console.log(error);
            yield put({
                type: 'CUSTOMER_ADD_ADDRESS_FAILED',
                error
            });
        }
    } else {
        /**
         * Redirect user
         */
    }
}





