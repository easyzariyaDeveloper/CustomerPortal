import React from "react";
import PageLayout from "../../Layout";
import { LoginWrapper} from "./styles";
import RightPane from "./RightPane";
import LeftPane from "./LeftPane";


export default function Login(){
    return <PageLayout>
        <LoginWrapper>
            <LeftPane/>
            <RightPane />
        </LoginWrapper>
    </PageLayout>
}