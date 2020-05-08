import React from "react";
import { EnterOtp, OtpPanewrapper, OtpWrapper } from "./style";
import OtpText from "./OtpText";
import { Link } from 'react-router-dom';
import { Login_SignUp_Button } from "../../Assets/common-styled";

export default function OtpPane(props) {
    return <OtpPanewrapper>
        <OtpWrapper>
            <EnterOtp>Enter OTP</EnterOtp>
        </OtpWrapper>
        <OtpText type="text"
            placeholder="0"
            maxlength = "4"
        />

<Link className = "link" to="#">Resend OTP</Link> 
<Link className = "link" to="#">Change Number</Link> 
<Login_SignUp_Button>Verify</Login_SignUp_Button>
        
    </OtpPanewrapper>
}