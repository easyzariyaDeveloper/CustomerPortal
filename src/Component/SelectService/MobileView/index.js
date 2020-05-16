import React, { useState } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { ServiceMPageWrapper, MTab } from "./style";
import { Tabs } from "../mockServiceData";

export default function SelectService() {
    return<MobilePageLayout>
        <ServiceMPageWrapper>
            <MTab 
            tabs = {Tabs} />
        </ServiceMPageWrapper>
    </MobilePageLayout>
}