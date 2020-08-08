import { TimeStyling } from "../../Common/DateTimePicker/style"

export function fetchActiveCart(){
    return{
        type: "FETCH_ACTIVE_CART_DETAIL"
    }
}

export function fetchCart(){
    return{
        type: "FETCH_CART_DETAILS"
    }
}

export function deleteItem (id){
    return{
        type: "DELETE_ITEM",
        payload: {
            itemId: id
        }
    }
}

export function applyCoupon (code){
    return{
        type: "APPLY_COUPON",
        payload: code
    }
}

export function setTime(time){
    return {
        type: "SET_TIME",
        payload: time
    }
}
