import React from "react";
import PageLayout from "../../Layout";
import LeftPane from "../Login/LeftPane";
import SignUpRight from "./SignUpRight";
import { LoginWrapper } from "../../Assets/common-styled";

export default function SignUp(){
    return <PageLayout>
        <LoginWrapper>
            <LeftPane />
            <SignUpRight />
        </LoginWrapper>
    </PageLayout>
}