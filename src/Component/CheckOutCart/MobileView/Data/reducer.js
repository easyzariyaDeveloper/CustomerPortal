const defaultCreateOrderState = {
    inProgress: false,
    orderState: "",
    error:  {},
}

export default function CreateOrderReducer(state = defaultCreateOrderState, {type, data, error}){
    switch (type){
        case "FETCHING_CREATE_ORDER_API": 
            return {
                ...state,
                inProgress: true
            }
        break;
        case "FETCHED_CREATE_ORDER_SUCCESS":
            return {
                ...state,
                inProgress: false,
                orderState: data,  
            }
        break;
        case "CREATE_ORDER_FAILED":
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