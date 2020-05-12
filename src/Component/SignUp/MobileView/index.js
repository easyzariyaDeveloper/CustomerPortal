import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import EasyZariaLogo from "../../../Assets/img/EasyZariaLogo.jpg";
import ActionButton from "../../Common/ActionButton";
import { LogInSignupPageMWrapper, LoginSignupOverlay, LogoDiv, EZHeader, EZLogo } from "../../../Assets/common-styled";
import { SignUpCard, SignUpButton, LoginText } from "./style";
import { TextInput } from "../../Common/PasswordWrapper/style";
import PasswordWrapper from "../../Common/PasswordWrapper";


export default function SignUp() {
    return <MobilePageLayout>
        <LogInSignupPageMWrapper>
            <LoginSignupOverlay>
                <LogoDiv>
                    <EZLogo src={EasyZariaLogo} alt="Logo" />
                    <EZHeader>Easyzaria</EZHeader>
                </LogoDiv>

                <SignUpCard>
                    <TextInput label="Name" />
                    <TextInput label="Email Id" />
                    <TextInput type ="number" label = "Phone No."/>
                    <PasswordWrapper name = "Password"/>
                    <PasswordWrapper name = "Confirm Password" />

                    <SignUpButton>
                        <ActionButton label = "Sign Up"/>
                    </SignUpButton>
                    
                    <LoginText>
                        Already have an account? <a href = "#" className = "link">Login</a>
                    </LoginText>
                </SignUpCard>
            </LoginSignupOverlay>
        </LogInSignupPageMWrapper>
    </MobilePageLayout>
}
