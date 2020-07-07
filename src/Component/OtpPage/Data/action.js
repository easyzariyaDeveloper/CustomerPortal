export function fetchOtp (phone){
    return {
        type: "FETCH_OTP",
        payload: {phone}
    }
}