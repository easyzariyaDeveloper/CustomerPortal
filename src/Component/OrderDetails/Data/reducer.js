const defaultOrderByIdState = {
    inProgress: false,
    orderDetails: {},
    error:{}
}

export function OrderByIdReducer(state = defaultOrderByIdState, {type, data, error}){
    switch (type){
        case  "FETCHING_ORDER_BY_ID_INPROGRESS":{
            return {
                ...state,
                inProgress:true
            }
        }
        break;
        case "FETCHING_ORDER_BY_ID_SUCCESS":
            return {
                ...state,
                inProgress: false,
                orderDetails:data
            }
        break;
        case "FETCHING_ORDER_BY_ID_FAILED":
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