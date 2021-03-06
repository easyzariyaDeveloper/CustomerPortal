import React from "react";
import PageLayout from "../../Layout";
import RightPane from "./RightPane";
import LeftPane from "./LeftPane";
import { LoginWrapper } from "../../Assets/common-styled";


export default function Login(){
    return <PageLayout>
        <LoginWrapper>
            <LeftPane/>
            <RightPane />
        </LoginWrapper>
    </PageLayout>
}