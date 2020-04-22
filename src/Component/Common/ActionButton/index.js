import React from "react";

export default function ActionButton(props){
    return <button
        onClick = {props.onClick}
        disabled = {props.disabled}
    >
        {props.label}
    </button>
}