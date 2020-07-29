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

