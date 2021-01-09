
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


export function addCar(carDetails, callback){
    return{
        type:"CUSTOMER_ADD_CAR",
        payload: carDetails,
        callback: callback
    }
}

export function updateCarDetail(carDetails,id,callback){
    return{
        type:"CUSTOMER_UPDATE_CAR_DETAIL",
        payload: carDetails,
        callback: callback,
        id: id
    }
}

export function getCarById(carId, callBack){
    return{
        type: "FETCH_CAR_BY_ID",
        payload:carId,
        callBack: callBack
    }
}