import React, { useState, useEffect, useRef } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import { MapWrapper } from './style';
import { getArea, getCity, getState } from './util';
import GooglePlacesAutocomplete, {geocodeByPlaceId} from 'react-google-places-autocomplete';
import 'react-google-places-autocomplete/dist/index.min.css';

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
  
  function onPlaceSelected(response) {
    if(response["place_id"]){
      return  geocodeByPlaceId(response["place_id"]).then(((response, results) => {
        const place = results[0];
        const addressArray = place.address_components;
        setAddress({
          address: response["description"],
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
        });
      }).bind(null, response));
    }
  }


  function getAsyncMap(){
    if(mapPosition.markerPosition && mapPosition.markerPosition.lat){
      const AsyncMap = AsyncLoadMap({ props, onPlaceSelected, mapPosition, address , onMarkerDragEnd });
      return <AsyncMap
        googleMapURL= {`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&region=in`}
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


function AsyncLoadMap({ props, onPlaceSelected, mapPosition, address ,onMarkerDragEnd }) {
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
              <GooglePlacesAutocomplete
              onSelect={onPlaceSelected}
              componentRestrictions={{country: ["IN"]}}
              types={['(regions)']} 
              initialValue = {address?.address}
            /> : ""
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
        <GooglePlacesAutocomplete
          onSelect={onPlaceSelected}
          componentRestrictions={{country: ["IN"]}}
          types={['(regions)']}
          initialValue = {address?.address}
        />  
      );
    } 
}