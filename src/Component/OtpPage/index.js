import React from "react";
import MobilePageLayout from "../../Layout/MobileView";
import {OtpPageWrapper, OtpImg, MessagePara, VerifyButton, AnchorButton, BackButtonDiv} from "./style";
import OtpImage from "../../Assets/img/OtpImage.png"
import ActionButton from "../Common/ActionButton";
import {PHONE} from "../../Constants";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import OtpBox from "../Common/OtpBox";

export default function Otp() {
    return<MobilePageLayout>
        <OtpPageWrapper>
            <BackButtonDiv>
                <ArrowBackIosIcon/>
                <AnchorButton href="/signup">Back</AnchorButton>
            </BackButtonDiv>

            <OtpImg src = {OtpImage} alt = "OtpImage"/>

            <MessagePara>Please enter the OTP received in your mobile number <br></br> +91-9845965785   </MessagePara>
            <OtpBox/>

            <MessagePara>Didn't recieve the code? <a href = "#" className = "link">Resend Code</a></MessagePara>

            <VerifyButton>
                <ActionButton label = "Verify" use = {PHONE} /> 
            </VerifyButton>
        </OtpPageWrapper>
    </MobilePageLayout>
    
}