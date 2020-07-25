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
