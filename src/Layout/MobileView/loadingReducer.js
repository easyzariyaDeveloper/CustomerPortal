import { put, call, delay } from "redux-saga/effects";

const defaultLoadingState = {
    LoadingInProgress: true,
    error: ""
}

export default function LoadingReducer(state = defaultLoadingState, {type, data, error, message}){
    switch (type){
        case "FETCHING_API": 
            return {
                ...state,
                loadingInProgress: true
            }
        break;
        case "FETCHING_API_SUCCESS":
            return {
                ...state,
                loadingInProgress: false,
            }
        break;
        case "FETCHING_API_FAILED":
            return {
                ...state,
                loadingInProgress: false,
                error: {...setErrorData(error)},  
                message: ""
            } 
        break;
        case "SHOW_NOTIFICATION":
            return {
                ...state,
                loadingInProgress: false,
                error: {},
                message: message
            } 
        case "CLEAR_MESSAGE": 
            return {
                ...state,
                message: "",
                error: {}
            }
        break;
        default:
            return state
    }
}

function setErrorData(error = {}){
    const {status = "", message = ""} = error;
    let errorMessage = message || "Something went wrong...";
    if(status === 401){
        errorMessage = "Unauthorized !! You need to login to use the service";
    } else if(status === 400){
        errorMessage = "Bad credential !! Please verify the data";
    } else if(status === 403){
        errorMessage = "Forbidden !! You need extra credential to access.";
    } else if(status === 409){
        errorMessage = "Conflict !! This record already exists.";
    } else if(status === 404){
        errorMessage = "Not Found.. Something went wrong.";
    }
    
    errorMessage = error.ErrorMessage ? error.ErrorMessage : errorMessage;
    return {
        message: errorMessage,
        status: error?.status
    }
}

export function* clearMessage() {
    yield delay(5000);
    yield put({type: "CLEAR_MESSAGE"});
}
