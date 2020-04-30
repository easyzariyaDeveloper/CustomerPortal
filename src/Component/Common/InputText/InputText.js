import React from "react";
import {InputForm} from "./style";

export default function InputText(props){
    return <InputForm
            type= {props.type} 
            onChange={props.changed} 
            value={props.name}
            placeholder={props.placeholder}
        />
}