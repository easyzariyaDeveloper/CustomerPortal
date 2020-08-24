import React from "react";
import { EmptyCardWrapper, CardHeaderText } from "./style";
import { EZCard } from "../../Common/MobileCard";
import { MobileActionButton } from "../../../Assets/common-styled";


export default function EmptyCart(){

    return <EmptyCardWrapper>
        <EZCard>
            <CardHeaderText style = {{textAlign: "center"}}>No Items Found In Your Card </CardHeaderText>
            <MobileActionButton onClick = {()=> location.href = "/"} style = {{display: "block", margin: "0px auto", width: "70%"}}>Home</MobileActionButton>   
        </EZCard>
    </EmptyCardWrapper>
}