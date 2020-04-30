import React from "react";
import {EZLoginWrapper,Divison, SignUpText, LoginButton} from "./style";
import InputBox from "./InputBox";

export default function EZLogin(props){
    return <EZLoginWrapper>
        <Divison>OR</Divison>
        <InputBox
            type = "text"
            placeholder = "Email/ Phone Number"
        />
        <InputBox
            type = "password"
            placeholder = "Password"
        />
        <SignUpText>
            Not registered yet? <a href = "#" className = "link">Sign Up</a> instead.<br></br>
            <a href = "#" className = "link">Forgot Password ?</a>
        </SignUpText>

        <LoginButton>LOGIN</LoginButton>
        
    </EZLoginWrapper>
        

}