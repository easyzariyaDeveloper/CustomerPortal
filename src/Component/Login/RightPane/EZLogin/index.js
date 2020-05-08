import React from "react";
import {EZLoginWrapper,Divison, SignUpText} from "./style";
import InputText from "../../../Common/InputText/InputText";
import { Login_SignUp_Button } from "../../../../Assets/common-styled";

export default function EZLogin(props){
    return <EZLoginWrapper>
        <Divison>OR</Divison>
        <InputText
            type = "text"
            placeholder = "Email/ Phone Number"
        />
        <InputText
            type = "password"
            placeholder = "Password"
        />
        <SignUpText>
            Not registered yet? <a href = "#" className = "link">Sign Up</a> instead.<br></br>
            <a href = "#" className = "link">Forgot Password ?</a>
        </SignUpText>

        <Login_SignUp_Button>LOGIN</Login_SignUp_Button>
        
    </EZLoginWrapper>
        

}