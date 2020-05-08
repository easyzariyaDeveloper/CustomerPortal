import React, { useState, useEffect, useRef } from "react";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
import { MapWrapper, CenterHeader, AddressLabel, ConfirmButton, SubHeader, CloseButton } from "./style"


Geocode.setApiKey("AIzaSyCvTl6eSIExZE4yRZi-5cy9X_szomThq4c");
Geocode.enableDebug();


/**
  * Get the city and set the city input value to the one selected
  *
  * @param addressArray
  * @return {string}
  */
function getCity(addressArray) {
  let city = '';
  for (let i = 0; i < addressArray.length; i++) {
    if (addressArray[i].types[0] && 'administrative_area_level_2' === addressArray[i].types[0]) {
      city = addressArray[i].long_name;
      return city;
    }
  }
};

/**
  * Get the area and set the area input value to the one selected
  *
  * @param addressArray
  * @return {string}
  */
function getArea(addressArray) {
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
};
/**
  * Get the address and set the address input value to the one selected
  *
  * @param addressArray
  * @return {string}
  */
function getState(addressArray) {
  let state = '';
  for (let i = 0; i < addressArray.length; i++) {
    for (let i = 0; i < addressArray.length; i++) {
      if (addressArray[i].types[0] && 'administrative_area_level_1' === addressArray[i].types[0]) {
        state = addressArray[i].long_name;
        return state;
      }
    }
  }
};

function AsyncLoadMap({ props, onPlaceSelected, state, onMarkerDragEnd, onInfoWindowClose }) {
  return withScriptjs(
    withGoogleMap(
      response => (
        <GoogleMap google={response.google}
          defaultZoom={props.zoom}
          defaultCenter={{ lat: state.mapPosition.lat, lng: state.mapPosition.lng }}
        >
          {/* For Auto complete Search Box */}
          <Autocomplete
            style={{
              width: '100%',
              height: '40px',
              paddingLeft: '16px',
              marginTop: '15px',
              marginBottom: '15px',
              display: 'block',
            }}
            onPlaceSelected={onPlaceSelected}
            //types={['IN']}
          />
          {/*Marker*/}
          <Marker google={response.google}
            name={'Dolores park'}
            draggable={true}
            onDragEnd={onMarkerDragEnd}
            position={{ lat: state.markerPosition.lat, lng: state.markerPosition.lng }}
          />
          <Marker />
          {/* InfoWindow on top of marker */}
          <InfoWindow
            onClose={onInfoWindowClose}
            position={{ lat: (state.markerPosition.lat + 0.0018), lng: state.markerPosition.lng }}
          >
            <div>
              <span style={{ padding: 0, margin: 0 }}>{state.address}</span>
            </div>
          </InfoWindow>
          <div>
            <AddressLabel> Address : {`${state.area}, ${state.address}, ${state.city}, ${state.state}`}</AddressLabel>
          </div>
          <ConfirmButton
            label = "Confirm"
            onClick = {() => console.log("Confirm")}
          />
        </GoogleMap>
      )
    )
  );
}

export default function Map(props) {
  const [state, setState] = useState({
    address: '',
    city: '',
    area: '',
    state: '',
    mapPosition: {
      lat: props.center.lat,
      lng: props.center.lng
    },
    markerPosition: {
      lat: props.center.lat,
      lng: props.center.lng
    }
  });
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      Geocode.fromLatLng(state.mapPosition["lat"], state.mapPosition["lng"])
        .then(response => {
          const address = response.results[0].formatted_address;
          const addressArray = response.results[0].address_components;
            const city = getCity(addressArray);
            const area = getArea(addressArray);
            const state = getState(addressArray);
            console.log('city', city, area, state);
          
          setState({
            address: address ? address : "",
            area: area ? area : "",
            city: city ? city : "",
            state: state ? state : ""
          });

        }, (error) => console.log(error));
    }
  }, []);

  /**
  * And function for city,state and address input
  * @param event
  */
  const onChange = (event) => {
    setState({ [event.target.name]: event.target.value });
  };
  /**
    * This Event triggers when the marker window is closed
    *
    * @param event
    */
  const onInfoWindowClose = (event) => { };

  /**
  * When the user types an address in the search box
  * @param place
  */
 const onPlaceSelected = (place) => {
  console.log(place);
  const address = place.formatted_address,
    addressArray = place.address_components,
    city = getCity(addressArray),
    area = getArea(addressArray),
    state = getState(addressArray),
    latValue = place.geometry.location.lat(),
    lngValue = place.geometry.location.lng();
  // Set these values in the state.
  setState({
    address: (address) ? address : '',
    area: (area) ? area : '',
    city: (city) ? city : '',
    state: (state) ? state : '',
    markerPosition: {
      lat: latValue,
      lng: lngValue
    },
    mapPosition: {
      lat: latValue,
      lng: lngValue
    },
  })
};

  /**
 * When the marker is dragged you get the lat and long using the functions available from event object.
 * Use geocode to get the address, city, area and state from the lat and lng positions.
 * And then set those values in the state.
 *
 * @param event
 */
  const onMarkerDragEnd = (event) => {
    console.log('event', event);
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng(),
      addressArray = [];
    Geocode.fromLatLng(newLat, newLng).then(
      (response) => {
        const address = response.results[0].formatted_address,
          addressArray = response.results[0].address_components,
          city = getCity(addressArray),
          area = getArea(addressArray),
          state = getState(addressArray);
        setState({
          address: (address) ? address : '',
          area: (area) ? area : '',
          city: (city) ? city : '',
          state: (state) ? state : ''
        });

      }, (error) => {
        console.error(error);
      });
  };

  const AsyncMap = AsyncLoadMap({ props, onPlaceSelected, state, onMarkerDragEnd, onInfoWindowClose });
  let map;
  if (props.center.lat !== undefined) {
    map = <MapWrapper>
      <div>
        <CloseButton onClick = {() => props.setVisibilityForOverlay(false)}> &#x274C; </CloseButton>
        <CenterHeader>Select Center</CenterHeader>
        <SubHeader>Locate On Google Maps</SubHeader>
        <AsyncMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvTl6eSIExZE4yRZi-5cy9X_szomThq4c&libraries=places&region=IN"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ margin: `0 auto`, height: props.height, width: props.width }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>

    </MapWrapper>
  } else {
    map = <div style={{ height: props.height }} />
  }

  return map;

}



