import React, { useEffect , useRef } from "react";
import MobilePageLayout from "../../Layout/MobileView";
import {OtpPageWrapper, OtpImg, MessagePara, VerifyButton, ResendButton} from "./style";
import OtpImage from "../../Assets/img/OtpImage.png"
import ActionButton from "../Common/ActionButton";
import {PHONE} from "../../Constants";
import OtpBox from "../Common/OtpBox";
import { fetchOtp, createOtp } from "./Data/action";
import { connect } from "react-redux";

function Otp(props) {
    const phoneNumber = useRef(sessionStorage?.getItem("otpMobileNumber"));
    const customerId = useRef(new URLSearchParams(window.location.search).get("customerId"));

    return<MobilePageLayout backButton = {true}>
        <OtpPageWrapper>
            <OtpImg src = {OtpImage} alt = "OtpImage"/>

            <MessagePara>Please enter the OTP received in your mobile number <br></br> {`+91-${phoneNumber?.current}`} </MessagePara>
            <OtpBox/>

            <MessagePara>Didn't recieve the code? <ResendButton onClick= {()=> props.createOtpResend(customerId?.current)}>Resend Code</ResendButton></MessagePara>

            <VerifyButton>
                <ActionButton label = "Verify" use = {PHONE} /> 
            </VerifyButton>
        </OtpPageWrapper>
    </MobilePageLayout>
    
}


const mapStateToProps = (state) => {
    return {
        inProgress: state?.otp?.inProgress,
        otp: state?.otp?.otp,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createOtpResend: (customerId="") => {dispatch(createOtp(customerId))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Otp);
