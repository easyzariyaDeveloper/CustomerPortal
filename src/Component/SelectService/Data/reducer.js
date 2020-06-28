const defaultPackagesState = {
    inProgress: false,
    packages:  {
        "autoCare": [],
        "doorStep": []
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


const defaultSubPackageState = {
    id: "",
    subPackageLabel :""
}

export function SubPackageReducer(state = defaultSubPackageState, {type,code,data}) {
    switch(type){
        case "ADD_SUBPACKAGE":
            return{
                ...state,
                id: code,
                subPackageLabel: data
            }
        break;
        case "REMOVE_SUBPACKAGE":
            return{
                ...state,
                id:"",
                subPackageLabel: ""
            }
        break;
        default:
            return state

    }
}