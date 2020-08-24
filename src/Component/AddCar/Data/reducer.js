const defaultBrandState = {
    inProgress: false,
    brands: "",
    error:  {},
}

export default function BrandsReducer(state = defaultBrandState, {type, data, error}){
    switch (type){
        case "FETCHING_BRAND_API": 
            return {
                ...state,
                inProgress: true
            }
        break;
        case "FETCHED_BRAND_SUCCESS":
            return {
                ...state,
                inProgress: false,
                brands: data,  
            }
        break;
        case "FETCHING_BRAND_FAILED":
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



const defaultCarModelState = {
    inProgress: false,
    carModel:[],
    error:  {},
}

export function CarModelsReducer(state = defaultCarModelState, {type, data, error}){
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



