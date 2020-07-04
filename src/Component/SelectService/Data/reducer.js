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



const defaultBrandStateInServices = {
    inProgress: false,
    brands: "",
    error:  {},
}

export function BrandsReducerInServices(state = defaultBrandStateInServices, {type, data, error}){
    switch (type){
        case "FETCH_BRAND": 
            return {
                ...state,
                inProgress: true
            }
        break;
        case "FETCH_BRAND_SUCCESS":
            return {
                ...state,
                inProgress: false,
                brands: data,  
            }
        break;
        case "FETCH_BRAND_FAILED":
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



const defaultCarModelStateInServices = {
    inProgress: false,
    carModel:[],
    error:  {},
}

export function CarModelsReducerInServices(state = defaultCarModelStateInServices, {type, data, error}){
    switch (type){
        case "FETCH_CAR_MODEL": 
            return {
                ...state,
                inProgress: true
            }
        break;
        case "FETCH_CAR_MODEL_SUCCESS":
            return {
                ...state,
                inProgress: false,
                carModel: data,  
            }
        break;
        case "FETCH_CAR_MODEL_FAILED":
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