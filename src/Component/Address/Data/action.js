
export function addAddress(address){
    return{
        type: "CUSTOMER_ADD_ADDRESS",
        payload: address
    }
}


export function updateCustomerAddresss(updatedAddress,addressId){
    return{
        type: "CUSTOMER_UPDATE_ADDRESS",
        payload: {
            updatedAddress,
            addressId
        }
    }
}