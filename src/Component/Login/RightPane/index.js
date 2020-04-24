import React from "react";
import { PaneWrapper } from "./style";
import FBLoginButton from "./SocialLogin/FaceLoginButton";
import GoogleLoginButton from "./SocialLogin/GoogleLoginButton";
import EZLogin from "./EZLogin";


export default function RightPane(props) {
    return <PaneWrapper>
        <FBLoginButton/>
        <GoogleLoginButton/>
        <EZLogin/>
    </PaneWrapper>
}