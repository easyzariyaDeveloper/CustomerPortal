import React from "react";
import {SelectServicePageHeader} from "./styles";
import Tab from "./Tab";
import PageLayout from "../../Layout";

import {Tabs} from "./mockData";


export default function Services(){
    return <PageLayout>
        <SelectServicePageHeader>Select Service Package</SelectServicePageHeader>
        <Tab tabs = {Tabs} />
    </PageLayout>
}

