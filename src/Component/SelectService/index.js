import React from "react";
import {SelectServicePageHeader} from "./styles";
import PageLayout from "../../Layout";

import {Tabs} from "./mockServiceData";
import Tab from "./Tab";


export default function Services(){
    return <PageLayout>
        <SelectServicePageHeader>Select Service Package</SelectServicePageHeader>
        <Tab tabs = {Tabs} />
    </PageLayout>
}

