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


export function fetchOrderHistory(){
    return {
        type: "FETCH_ORDER_HISTORY"
    }
}

export function downloadJobCard(orderId){
    return{
        type: "DOWNLOAD JOBCARD",
        payload: orderId
    }
}



