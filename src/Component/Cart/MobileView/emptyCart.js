import React from "react";
import { EmptyCardWrapper, CardHeaderText } from "./style";
import { EZCard } from "../../Common/MobileCard";
import { MobileActionButton } from "../../../Assets/common-styled";


export default function EmptyCart(){

    return <EmptyCardWrapper>
        <EZCard>
            <CardHeaderText>No Items Found In Your Card </CardHeaderText>
            <MobileActionButton onClick = {()=> location.href = "/"} style = {{display: "block", margin: "25px auto 0px", width: "70%"}}>Home</MobileActionButton>   
        </EZCard>
    </EmptyCardWrapper>
}