import React from "react";

export default function SelectAddress(props) {
    return <>
        <button onClick = {() =>  props.setVisibilityForOverlay(false)}>Close</button>
        <button onClick = {() => props.setAddress()}>Save</button>
    </>
}