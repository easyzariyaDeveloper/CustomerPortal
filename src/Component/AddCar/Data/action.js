
export function fetchBrandForCars(){
    return{
        type: "FETCH_BRAND_FOR_CARS"
    }
}

export function fetchCarListByBrand(brand){
    return{
        type:"FETCH_CAR_LIST_BY_BRAND",
        payload: {brand}
    }
}