export function fetchProfile(){
    return{
        type: "FETCH_PROFILE"
    }
}

export function deleteCar(id){
    return{
        type: "DELETE_CAR",
        payload: id
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

export function deleteAddress(addressId){
    return{
        type: "DELETE_ADDRESS",
        payload: addressId
    }
}




