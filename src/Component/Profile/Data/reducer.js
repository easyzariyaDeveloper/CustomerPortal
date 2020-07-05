const defaultProfileState = {
    inProgress: false,
    selectedCarId:"ern-car-d2dc2cbc-8e7f-4092-a6ee-1cad52d8e3f6",
    error:  {},
    orderList : [],
    email:  "",
    customerId: "",
    userName: "",
    addressList: [],
    primaryPhone: ""
}

export default function ProfileReducer(state = defaultProfileState, {type, data, error}){
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
                addressList: data.addressList || [],
                orderList:  data.orderList || [],
                ...data  
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