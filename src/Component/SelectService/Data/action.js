
export function fetchPackages(filter){
    return {
        type: "REQUEST_PACKAGES_DATA",
        payload:{
            filter
        }
    }
}

export function fetchPackageById(packageId){
  return {
    type: "REQUEST_PACKAGES_DATA_BY_ID",
    payload:{
        packageId
    }
  }
}
export function fetchCar(){
  return {
      type: "REQUEST_CAR",
  }
}

export function fetchCities(){
  return {
      type: "REQUEST_CITY",
  }
}


export const addSubPackage = (code) => {
    return {
      type: "ADD_SUBPACKAGE",
      payload: {
        code:code,
      }
  }
}

export const removeSubPackage = () => {
  return {
    type: "REMOVE_SUBPACKAGE",
    }
}