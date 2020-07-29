export function fetchOtp (phone){
    return {
        type: "FETCH_OTP",
        payload: {phone}
    }
}


export function createOtp(phone){
    return{
        type: "CREATE OTP",
        payload: phone
    }
}