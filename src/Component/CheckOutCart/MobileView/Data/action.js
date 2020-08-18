export function createOrder(type){
    return{
        type: "CREATE_ORDER",
        payload: type
    }
}

export function setShippingAddress(address){
    return {
        type:"SET_SHIPPING_ADDRESS",
        payload: address
    }
}