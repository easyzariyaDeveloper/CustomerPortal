export function loginUserByCredential(userDetail){
    return {
        type: "LOGIN_USER_WITH_CRENDETIAL",
        payload: userDetail
    }
}