const defaultBrandState = {
    inProgress: false,
    brands: "",
    error:  {},
}

export default function BrandsReducer(state = defaultBrandState, {type, data, error}){
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
                brands: data.data,  
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
                carModel: data.data,  
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



