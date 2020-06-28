
export function fetchPackages(carId){
    return {
        type: "REQUEST_PACKAGES_DATA",
        payload:{
            carId
        }
    }
}

export const addSubPackage = (code,subPackage) => {
    return {
      type: "ADD_SUBPACKAGE",
      payload: {
        code:code,
        subPackage:subPackage
      
      }
  }
}

export const removeSubPackage = () => {
  return {
    type: "REMOVE_SUBPACKAGE",
    }
}