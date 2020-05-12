import React from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { MCard } from "../../../Assets/common-styled";
import { ServicePageMWrapper,ServicePageMHeader,ServiceDataMHeader,ServiceMDataInfo } from "./style";
import ActionButton from "../../Common/ActionButton";


export default function Service(){
    return<MobilePageLayout>
        <ServicePageMWrapper>
            <ServicePageMHeader>Services</ServicePageMHeader>
            <MCard>
                <ServiceDataMHeader>Door Step On Demand Service</ServiceDataMHeader>
                <ServiceMDataInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServiceMDataInfo>
            <ActionButton
                label="Select Service"
                onClick={() => location.href = "/select-service"}
            />
            </MCard>
            <MCard>
                <ServiceDataMHeader>EZ Autocare Center</ServiceDataMHeader>
                <ServiceMDataInfo>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.</ServiceMDataInfo>
          <ActionButton
            label="Select Service"
            onClick={() => location.href = "/select-service"}
          />
            </MCard>
        </ServicePageMWrapper>
    </MobilePageLayout>
}



