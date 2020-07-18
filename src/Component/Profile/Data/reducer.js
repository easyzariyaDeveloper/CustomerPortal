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