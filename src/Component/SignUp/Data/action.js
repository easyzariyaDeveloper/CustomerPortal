export function loginUserByCredential(userDetail, search){
    return {
        type: "LOGIN_USER_WITH_CRENDETIAL",
        payload: userDetail,
        search : search
    }
}

export function createSignup(signupDetails){
    return{
        type: "SIGNUP_USER_DETAILS",
        payload: signupDetails
    }
}

export function resetPasswordCreateOtp(userId){
    return{
        type: "RESET_PASSWORD_CREATE_OTP",
        payload: userId
    }
}

export function verifyResetPasswordOtp(userId,otp){
    return{
        type: "VERIFY_RESET_PASSWORD_OTP",
        payload: {
            "otp": otp,
            "resetInput": userId
        }
    }
}
