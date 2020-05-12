import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import {SocialLogIn, OrPara, TextInput, PasswordLink,LoginCard,LoginButton, SignUpText, OrDiv } from "./style";
import EasyZariaLogo from "../../../Assets/img/EasyZariaLogo.jpg";
import FBLogin from "../RightPane/SocialLogin/FaceLoginButton";
import GoogleLogin from "../RightPane/SocialLogin/GoogleLoginButton";
import ActionButton from "../../Common/ActionButton";
import { LogInSignupPageMWrapper, LoginSignupOverlay, LogoDiv, EZHeader, EZLogo } from "../../../Assets/common-styled";
import PasswordWrapper from "../../Common/PasswordWrapper";

export default function Login() {


    return <MobilePageLayout>
        <LogInSignupPageMWrapper>
            <LoginSignupOverlay>
                <LogoDiv>
                    <EZLogo src={EasyZariaLogo} alt="Logo" />
                    <EZHeader>Easyzaria</EZHeader>
                </LogoDiv>

                <SocialLogIn>
                    <FBLogin />
                    <GoogleLogin />
                </SocialLogIn>

                <OrDiv>
                    <OrPara>OR</OrPara>
                </OrDiv>

                <LoginCard>
                    <TextInput
                        label="Email Id"
                    />
                    <PasswordWrapper name = "Password"/>
                
                    <PasswordLink>
                        <a href="#" className = "link">Forgot your password?</a>
                    </PasswordLink>

                    <LoginButton>
                        <ActionButton label = "LOGIN"/> 
                    </LoginButton>
                    <SignUpText>
                        Don't have an account? <a href = "#" className = "link">Sign Up</a>
                    </SignUpText>
                </LoginCard>
            </LoginSignupOverlay>
        </LogInSignupPageMWrapper>
    </MobilePageLayout>
}

