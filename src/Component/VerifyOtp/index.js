import React from "react";
import PageLayout from "../../Layout";
import LeftPane from "../Login/LeftPane";
import OtpPane from "./OtpPane";
import { LoginWrapper } from "../../Assets/common-styled";


export default function VerifyOtp(){
    return<PageLayout>
        <LoginWrapper>
            <LeftPane></LeftPane>
            <OtpPane/>
        </LoginWrapper>
    </PageLayout>
}