import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import EasyZariaLogo from "../../../Assets/img/EasyZariaLogo.jpg";
import ActionButton from "../../Common/ActionButton";
import { LogInSignupPageMWrapper, LoginSignupOverlay, LogoDiv, EZHeader, EZLogo } from "../../../Assets/common-styled";
import { SignUpCard, SignUpButton, LoginText, SignupTextField } from "./style";
import PasswordWrapper from "../../Common/PasswordWrapper";
import { PHONE } from "../../../Constants";


export default function SignUp() {
    return <MobilePageLayout>
        <LogInSignupPageMWrapper>
            <LoginSignupOverlay>
                
                <LogoDiv>
                    <EZLogo src={EasyZariaLogo} alt="Logo" />
                    <EZHeader>EasyZaria</EZHeader>
                </LogoDiv>
            
                <SignUpCard>
                    <SignupTextField label="Name" />
                    <SignupTextField label="Email Id" />
                    <SignupTextField type ="number" label = "Phone No."/>
                    <PasswordWrapper name = "Password"/>
                    <PasswordWrapper name = "Confirm Password" />

                    <SignUpButton>
                        <ActionButton label = "Sign Up" use = {PHONE}/>
                    </SignUpButton>
                    
                    <LoginText>
                        Already have an account? <a href = "#" className = "link">Login</a>
                    </LoginText>
                </SignUpCard>
               
            </LoginSignupOverlay>
        </LogInSignupPageMWrapper>
    </MobilePageLayout>
}
