const defaultCartState = {
    inProgress: false,
    cart: {},
    error:  {},
    hasActiveCart: false
}

export function CartReducer(state = defaultCartState, {type, data, error}){
    switch (type){
        case "FETCHING_API": 
            return {
                ...state,
                inProgress: true
            }
        break;

        case "SET_ACTIVE_CART":
            return {
                ...state,
                hasActiveCart: data
            }
        break;

        case "CART_DATA_SUCCESS":
            return {
                ...state,
                inProgress: false,
                cart: data
            }
        break;
        case "FETCHING_API_FAILED":
            return {
                ...state,
                inProgress: false,
                error: error,  
            } 
        break;
        default:
            return state
    }
}