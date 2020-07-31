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
        default:
            return state
    }
}

function setErrorData(error){
    const {status = ""} = error;
    let errorMessage = "Something went wrong. Fail to login";
    if(status === 401){
        errorMessage = "Unauthorized !! You need to login to use the service";
    } else if(status === 400){
        errorMessage = "Bad credential !! Please verify the data";
    } else if(status === 403){
        errorMessage = "Forbidden !! You need extra credential to access.";
    } else if(status === 409){
        errorMessage = "Conflict !! This record already exists.";
    }
    errorMessage = error.ErrorMessage ? error.ErrorMessage : errorMessage;
    return {
        message: errorMessage,
        status: error?.status
    }
}
