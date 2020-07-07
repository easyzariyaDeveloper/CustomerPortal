const defaultOtpState = {
    inProgress: false,
    otp: "",
    error:  {},
}

export function OtpReducer(state = defaultOtpState, {type, data, error}){
    switch (type){
        case "FETCH_OTP": 
            return {
                ...state,
                inProgress: true
            }
        break;
        case "FETCH_OTP_SUCCESS":
            return {
                ...state,
                inProgress: false,
                otp: data,  
            }
        break;
        case "FETCH_OTP_FAILED":
            return {
                ...state,
                inProgress: false,
                error: error,  
            } 
        break;
        default:
            return state
    }
}