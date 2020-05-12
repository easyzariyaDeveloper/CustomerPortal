import React, { useState} from "react";
import Autocomplete from 'react-google-autocomplete';
//import "https://maps.googleapis.com/maps/api/js?key=AIzaSyDeYrtX2zsk_yGH6tHxXnzthYgUckGkqE8&libraries=places"

export default function MobileMap(props){
    return <Autocomplete
        style={{width: '90%'}}
        onPlaceSelected={(place) => {
            console.log(place);
            props.onPlaceSelected(place);
        }}
        types={['(regions)']}
        componentRestrictions={{country: "ru"}}
    />
}
