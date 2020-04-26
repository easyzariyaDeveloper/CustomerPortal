import React from "react";
import {ServicesWrapper} from "./styles";
import Tab from "./Tab";
import PageLayout from "../../Layout";

import {Tabs} from "./mockData";


export default function Services(){
    return <PageLayout>
        
        <Tab tabs = {Tabs} />
    </PageLayout>
}

