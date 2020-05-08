import React from "react";
import { RightSectionWrapper, TextBox, LogInText, TermsText, SignUpButton } from "./style";
import InputText from "../Common/InputText/InputText";
import { Login_SignUp_Button } from "../../Assets/common-styled";


export default function SignUpRight(props) {
    return <RightSectionWrapper>
        <InputText
            type="text"
            placeholder="Name"
        />
        <InputText
            type="email"
            placeholder="Email Id"
        />
        <InputText
            type="tel"
            placeholder="Phone"
        />
        <InputText
            type="password"
            placeholder="Password"
        />
        <InputText
            type="password"
            placeholder="Confirm Password"
        />
        <LogInText>
            Have an account? <a href="#" className="link">Login</a> instead.
        </LogInText>

        <TermsText>By clicking Sign Up, I agree to the <a href ="#" className = "link">Terms of Service</a><br></br>
        and <a href ="#" className = "link">Privacy Policy</a> of EasyZaria
        </TermsText>

        <Login_SignUp_Button>Sign Up</Login_SignUp_Button>

    </RightSectionWrapper>
}