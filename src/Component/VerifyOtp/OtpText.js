import React, {useState} from "react";
import { Otp } from "./style";

export default function OtpText(props){
    const [value, setValue] = useState("");
    return <Otp
            type= {props.type} 
            onChange={(event) => {
                let {value = ""} = event.target;
                if(value.length > props.maxlength){
                    value = value.substring(0,props.maxlength);
                } 
                setValue(value);
                return value;
            }} 
            placeholder={props.placeholder}
            maxlength = {props.maxlength}
            value = {value}
        />
}