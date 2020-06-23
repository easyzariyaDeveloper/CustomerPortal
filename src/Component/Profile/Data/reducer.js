const defaultProfileState = {
    inProgress: false,
    name: "",
    emailId:"",
    selectedCarId:"ern-car-d2dc2cbc-8e7f-4092-a6ee-1cad52d8e3f6",
    error:  {},
    
}

export default function ProfileReducer(state = defaultProfileState, {type, data, error}){
    switch (type){
        default:
            return state
    }
}