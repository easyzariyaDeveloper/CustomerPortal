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

const defaultCarState = {
    inProgress: false,
    car: []
}

export function CarReducer(state = defaultCarState, {type,data,error}){
    switch(type){
        case "FETCH_CAR":
            return {
                ...state,
                inProgress: true
            }
        break;
        case "FETCH_CAR_SUCCESS":
            return {
                ...state,
                inProgress: false,
                car: data,  
            }
        break;
        case "FETCH_CAR_FAILED":
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

const defaultCityState = {
    inProgress: false,
    cities: []
}

export function CityReducer(state = defaultCityState, {type,data,error}){
    switch(type){
        case "FETCH_CITY":
            return {
                ...state,
                inProgress: true
            }
        break;
        case "FETCH_CITY_SUCCESS":
            return {
                ...state,
                inProgress: false,
                cities: data,  
            }
        break;
        case "FETCH_CITY_FAILED":
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