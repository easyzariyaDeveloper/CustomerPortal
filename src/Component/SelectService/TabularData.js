import React from "react";
import { Packages, GeneralServices, CarCareServices } from "./mockServiceData";
import Table from "../Common/Table";
import { formatBodyData , formatHeaderData } from "./util";


export default function TabularData(props){
    const {activeId} = props;
     
     if(activeId){
        const servicesArray = activeId == "general" ? GeneralServices : CarCareServices;
        const bodyContent = formatBodyData(activeId, servicesArray);
        const headerContent = formatHeaderData(activeId)
        return <Table
            header = {headerContent}
            body = {bodyContent}
        />
     }
}