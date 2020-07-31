export function fetchProfile(){
    return{
        type: "FETCH_PROFILE"
    }
}

export function deleteCar(carId){
    return{
        type: "DELETE_CAR",
        payload: carId
    }
}


export function changePassword(oldPassword,newPassword){
    return{
        type: "CHANGE_PASSWORD",
        payload:{
            oldPassword,
            newPassword
        }
    }
}


