const defaultPackagesState = {
    inProgress: false,
    packages:  {
        "autocare": [],
        "doorstep": []
    },
    error:  {},
    carId: ""
}

export default function PackagesReducer(state = defaultPackagesState, {type, data, error}){
    switch (type){
        case "FETCH_PACKAGES": 
            return {
                ...state,
                inProgress: true
            }
        break;
        case "FETCH_PACKAGES_SUCCESS":
            return {
                ...state,
                inProgress: false,
                packages: data,  
            }
        break;
        case "FETCH_PACKAGES_FAILED":
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