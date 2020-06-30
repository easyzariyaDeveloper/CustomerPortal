import React, { useState, useEffect } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import { MapWrapper,SubHeader } from './style';
import AddressInputText from '../Address/AddressInputText';


Geocode.setApiKey( "AIzaSyDeYrtX2zsk_yGH6tHxXnzthYgUckGkqE8" );
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
    const { visibleElm : {autoComplete = true} = {} } = props;
    if(autoComplete){
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
                types={['IN']}
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

export default function Map (props){

    const [state,setState] = useState ({
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
      },
    })
    
    
	/**
	 * Get the current address from the default map position and set those values in the state
	 */
    useEffect(() => {
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
        
      }, []);

  
  const onChange = (prop) => (event) => {
    setState({ ...state, [prop]: event.target.value });
  };

	/**
	 * This Event triggers when the marker window is closed
	 *
	 * @param event
	 */
	const onInfoWindowClose = ( event ) => {};

	/**
	 * When the marker is dragged you get the lat and long using the functions available from event object.
	 * Use geocode to get the address, city, area and state from the lat and lng positions.
	 * And then set those values in the state.
	 *
	 * @param event
	 */
	const onMarkerDragEnd = ( event ) => {
		let newLat = event.latLng.lat(),
		    newLng = event.latLng.lng();
            addressArray = [];
		Geocode.fromLatLng( newLat , newLng ).then(
			response => {
				const address = response.results[0].formatted_address,
				      addressArray =  response.results[0].address_components,
				      city = getCity( addressArray ),
				      area = getArea( addressArray ),
				      state = getState( addressArray );
				    setState( {
					address: ( address ) ? address : '',
					area: ( area ) ? area : '',
					city: ( city ) ? city : '',
					state: ( state ) ? state : '',
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
					mapPosition: {
						lat: newLat,
						lng: newLng
					},
				} )
			},
			error => {
				console.error(error);
			}
		);
	};

	/**
	 * When the user types an address in the search box
	 * @param place
	 */
	const onPlaceSelected = ( place ) => {
		console.log( 'plc', place );
		const address = place.formatted_address,
		      addressArray =  place.address_components,
		      city = getCity( addressArray ),
		      area = getArea( addressArray ),
		      state = getState( addressArray ),
		      latValue = place.geometry.location.lat(),
		      lngValue = place.geometry.location.lng();
		// Set these values in the state.
		    setState({
			address: ( address ) ? address : '',
			area: ( area ) ? area : '',
			city: ( city ) ? city : '',
			state: ( state ) ? state : '',
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

    const AsyncMap = AsyncLoadMap({ props, onPlaceSelected, state, onMarkerDragEnd, onInfoWindowClose });

    const map = <MapWrapper>
      <div>
        {/* <SubHeader>Locate On Google Maps</SubHeader> */}
        <AsyncMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDeYrtX2zsk_yGH6tHxXnzthYgUckGkqE8&libraries=places&region=IN"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ margin: `0 auto`, paddingTop: `10px`,height: props.height, width: props.width }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <p>{state.address}</p>
      
        </div>

    </MapWrapper>
  return map;
}
