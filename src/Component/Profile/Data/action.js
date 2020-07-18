export function fetchProfile(){
    return{
        type: "FETCH_PROFILE"
    }
}

export function deleteCar(car){
    return{
        type: "DELETE_CAR",
        payload: car
    }
}
