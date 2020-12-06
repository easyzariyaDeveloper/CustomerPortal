export function getCity(addressArray){
    let city = '';
    for (let i = 0; i < addressArray.length; i++) {
      // if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {    // made administrative to locality on 03/12/2020
      if (addressArray[i].types[0] && 'locality' === addressArray[i].types[0]) {
        city = addressArray[i].long_name;
        return city;
      }
    }
}

export function getArea(addressArray) {
    let area = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0]) {
        for (let j = 0; j < addressArray[i].types.length; j++) {
          if ('sublocality_level_1' === addressArray[i].types[j] || 'locality' === addressArray[i].types[j]) {
            area = addressArray[i].long_name;
            return area;
          }
        }
      }
    }
}

export function getState(addressArray) {
    let state = '';
    for (let i = 0; i < addressArray.length; i++) {
      for (let i = 0; i < addressArray.length; i++) {
        if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
          state = addressArray[i].long_name;
          return state;
        }
      }
    }
}

export function getPostalCode(addressArray){
  let postalCode = '';
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0] && 'postal_code' === addressArray[i].types[0]) {
        postalCode = addressArray[i].long_name;
        return postalCode;
      }
    }
}

