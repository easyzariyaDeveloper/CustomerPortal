import React, { useState, useEffect, useRef } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
import { MapWrapper, SubHeader } from './style';
import { getArea, getCity, getState } from './util';

const API_KEY = "AIzaSyDeYrtX2zsk_yGH6tHxXnzthYgUckGkqE8";
Geocode.setApiKey(API_KEY);

export default function Map(props) {

  const [address, setAddress] = useState({
    city: "",
    state: "",
    area: "",
    address: ""
  });
  const [mapPosition, setMapPosition] = useState({});
  const initialRender = useRef(true);

 
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getCurrentLocation, handleLocationError);
      } 
    }   
  }, []);

  function getCurrentLocation(location){
    if(location?.coords?.latitude){
      setMapPosition({
        mapPosition: {
          lat: location?.coords?.latitude,
          lng: location?.coords?.longitude
        },
        markerPosition: {
          lat: location?.coords?.latitude,
          lng: location?.coords?.longitude
        }
      });
      getPlaceBasedOnLatLng(location?.coords?.latitude, location?.coords?.longitude);
    }
  }

  function handleLocationError() {
    //Error: The Geolocation service failed.'
  }

  function getPlaceBasedOnLatLng(latitude, longitude){
    return Geocode.fromLatLng(latitude, longitude)
    .then(response => {
      const addressArray = response.results[0].address_components; 
      setAddress({
        area: getArea(addressArray) || "",
        city: getCity(addressArray) || "",
        state: getState(addressArray) || "",
        address:  response?.results[0]?.formatted_address
      });

    }, (error) => {
      // Logic to handle Error Case
    });
  }

  function onMarkerDragEnd (event) {
    const latitude = event.latLng.lat();
    const longitude = event.latLng.lng();
    setMapPosition({
      mapPosition: {
        lat: latitude,
        lng: longitude
      },
      markerPosition: {
        lat: latitude,
        lng: longitude
      }
    })
    getPlaceBasedOnLatLng(latitude, longitude);
  }
  
  function onPlaceSelected(place) {
    const addressArray = place.address_components;
    // Set these values in the state.
    setAddress({
      address: place.formatted_address,
      area: getArea(addressArray),
      city: getCity(addressArray),
      state: getState(addressArray),
    });
    setMapPosition({
      markerPosition: {
        lat: place?.geometry?.location?.lat(),
        lng: place?.geometry?.location?.lng()
      },
      mapPosition: {
        lat: place?.geometry?.location?.lat(),
        lng: place?.geometry?.location?.lng()
      }
    })
  }

  function onInfoWindowClose(event){

  }

  function getAsyncMap(){
    if(mapPosition.markerPosition && mapPosition.markerPosition.lat){
      const AsyncMap = AsyncLoadMap({ props, onPlaceSelected, mapPosition, address , onMarkerDragEnd, onInfoWindowClose });
      return <AsyncMap
        googleMapURL= {`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&region=IN`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ margin: `0 auto`, height: props.height, width: props.width }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    } else {
      return null;
    }
  }
 
  return <MapWrapper>
    {getAsyncMap()}
  </MapWrapper>
}


function AsyncLoadMap({ props, onPlaceSelected, mapPosition, address, onMarkerDragEnd, onInfoWindowClose }) {
  const { visibleElm : {autoComplete = true} = {} } = props;
  if(autoComplete){
    return withScriptjs(
      withGoogleMap(
        response => (
          <GoogleMap google={response.google}
            defaultZoom={props.zoom || 15}
            defaultCenter={{ lat: mapPosition?.mapPosition?.lat, lng: mapPosition?.mapPosition?.lng }}
          >
            {/* For Auto complete Search Box */}
            { !props?.selfDrop ?
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
            /> : null
            }

            {/*Marker*/}
            <Marker google={response.google}
              draggable={true}
              onDragEnd={onMarkerDragEnd}
              position={{ lat:  mapPosition?.mapPosition?.lat, lng: mapPosition?.mapPosition?.lng }}
            />
          </GoogleMap>
        )
      )
    ); 
    } else {
      return withScriptjs(
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
      );
    } 
}