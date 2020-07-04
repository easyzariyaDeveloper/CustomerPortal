export function loginUserByCredential(userDetail){
    return {
        type: "LOGIN_USER_WITH_CRENDETIAL",
        payload: userDetail
    }
}

export function createSignup(signupDetails){
    return{
        type: "SIGNUP_USER_DETAILS",
        payload: signupDetails
    }
}