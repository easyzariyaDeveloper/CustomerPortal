export function createOtp(customerId){
    return{
        type: "CREATE_OTP",
        payload: customerId
    }
}