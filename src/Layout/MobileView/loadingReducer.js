const defaultLoadingState = {
    LoadingInProgress: true,
    error: ""
}

export default function LoadingReducer(state = defaultLoadingState, {type, data, error}){
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
            } 
        break;
        default:
            return state
    }
}

function setErrorData(error){
    return {
        message: error?.message,
        status: error?.status
    }
}
