export function createOrder(type){
    return{
        type: "CREATE_ORDER",
        payload: type
    }
}