import React from "react";
import MobilePageLayout from "../../Layout/MobileView";
import {OtpPageWrapper, OtpImg,OtpBlank, MessagePara} from "./style";
import OtpImage from "../../Assets/img/OtpImage.jpg"
import ActionButton from "../Common/ActionButton";
import {PHONE} from "../../Constants";

export default function Otp() {
    return<MobilePageLayout>
        <OtpPageWrapper>
            <OtpImg src = {OtpImage} alt = "OtpImage"/>

            <MessagePara>Please enter the OTP received in your mobile number <br></br> +91-9845965785   </MessagePara>
            <OtpBlank></OtpBlank>

            <MessagePara>Didn't recieve the code. <a href = "#" className = "link">Resend Code</a></MessagePara>
            <ActionButton label = "Verify" use = {PHONE} /> 
        </OtpPageWrapper>
    </MobilePageLayout>
    
}