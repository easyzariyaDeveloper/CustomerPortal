import React from "react";
import { HeaderWrapper, Logo, ServiceInformationWrapper, ServiceInformationText, ServiceData } from "./styles";
import ActionButton from "../../Component/Common/ActionButton";

export default function Header(){
    return <HeaderWrapper>
        <Logo/>
        <ServiceInformationWrapper>
            <ServiceData>
                <ServiceInformationText>Service Hours</ServiceInformationText>
                <ServiceInformationText>Mon - Sat: 7:00 am - 6:00 pm </ServiceInformationText>
            </ServiceData>
            <ServiceData>
                <ServiceInformationText>Call Us</ServiceInformationText>
                <ServiceInformationText>(555) Car-Repair</ServiceInformationText>
            </ServiceData>
            <ServiceData>
                <ActionButton
                    label = "Make an Appointment"
                    onClick = {() => console.log("making an appointment button")}
                />
            </ServiceData>
        </ServiceInformationWrapper>
    </HeaderWrapper>
}