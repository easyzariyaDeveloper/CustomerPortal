const defaultProfileState = {
    inProgress: false,
    selectedCarId:"",
    error:  {},
    orderList : [],
    email:  "",
    customerId: "",
    userName: "",
    addressList: [],
    primaryPhone: "",
    carList: []
}

export function ProfileReducer(state = defaultProfileState, {type, data, error}){
    switch (type){
        case  "FETCH_PROFILE":{
            return {
                ...state,
                inProgress:true
            }
        }
        break;
        case "FETCH_PROFILE_SUCCESS":
            return {
                ...state,
                inProgress: false,
                ...data,
                addressList: data.addressList || [],
                orderList:  data.orderList || [],
            }
        break;
        case "CUSTOMER_UPDATE_CAR_SUCCESS": 
            return {
                ...state,
                carList: data.carList || [],
            }
        break;

        case "FETCH_PROFILE_FAILED":
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

const defaultOrderHistoryState = {
    inProgress: false,
    orderHistory: [],
    error:{}
}

export function OrderHistoryReducer(state = defaultOrderHistoryState, {type, data, error}){
    switch (type){
        case  "FETCHING_ORDER_HISTORY_INPROGRESS":{
            return {
                ...state,
                inProgress:true
            }
        }
        break;
        case "FETCH_ORDER_HISTORY_SUCCESS":
            return {
                ...state,
                inProgress: false,
                orderHistory:data
            }
        break;
        case "FETCH_ORDER_HISTORY_FAILED":
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