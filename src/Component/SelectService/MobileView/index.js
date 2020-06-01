import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { ServiceMPageWrapper, MTab, MServiceHeader } from "./style";
import { MobileTab,Tabs} from "../mockServiceData";

export default function SelectService() {
    return<MobilePageLayout>
        <MServiceHeader>Our Services</MServiceHeader>
        <ServiceMPageWrapper>
            <MTab 
            tabs = {MobileTab}
            cardInfo = {Tabs}
            />
        </ServiceMPageWrapper>
    </MobilePageLayout>
}