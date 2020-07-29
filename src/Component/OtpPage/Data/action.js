export function createOtp(customerId){
    return{
        type: "CREATE_OTP",
        payload: customerId
    }
}

export function verifyOtp(customerId, otpValue){
    return{
        type: "VERIFY_OTP",
        customerId,
        otpValue
    }
}