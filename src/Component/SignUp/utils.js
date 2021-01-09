export const MOBILE_NUMBER_LENGTH = 10;

export function isValidUserDetail(userId = "") {
    let isEmail = /[a-zA-Z]+$/.test(userId);
    if(!userId){
        return false;
    }
    if(isEmail){
        return isValidEmail(userId);
    } else {
        return isValidContactNumber(userId);
    } 
}

export function isValidEmailOrPhone(value = ""){
    return /[a-zA-Z]+/.test(value);
}


export function isValidPassword(password = ""){
    // let isPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/; --- for special character as well
    // let isPassword = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    // return isPassword.test(password) ? true : false;
    return true
}

export function isValidEmail(email = ""){
    const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailReg.test(email);
}

export function isValidContactNumber(phoneNumber = ""){
    return phoneNumber.length == MOBILE_NUMBER_LENGTH ? true : false;
}

export function isPasswordMatching(password = "", confirmPassword = ""){
    if(!isValidPassword(password) || !isValidPassword(confirmPassword)){
        return false;
    }
    return password === confirmPassword;
}
