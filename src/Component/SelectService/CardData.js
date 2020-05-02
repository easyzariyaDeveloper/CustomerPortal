import React from "react";
import { ElectricalServices, Packages } from "./mockServiceData";
import {CardWrapper,ServiceName, ServiceInfo, ServiceCost, ServiceDuration, Card, ListItem, ButtonWrapper } from "./styles";
import ActionButton from "../Common/ActionButton";

export default function CardData(props){
    const {activeId} = props;

    function transformServicesToMap(ACServiceArray){
        return ACServiceArray.reduce((accumulator,value) =>{
            const {name, id} = value;
            accumulator = {
                ...accumulator,
                [id] : name
            };
            return accumulator;
        }, {});
    }

    function formatData(id, codeToNameMap) {
        const arrayInfo = Object.entries(Packages[id]);
        const response = arrayInfo.map(el => el[1]);
        console.log(response);
        response.forEach(row => {
            if(row.services){
                const serviceNames = row.services.map(serviceCode => codeToNameMap[serviceCode]);
                row.serviceNames = serviceNames;
            } else {
                row.serviceNames = ["Need Inspection for Quotation"];
            }
        });
        return response;
    }

    if(activeId){
        const codeToNameMap = transformServicesToMap(ElectricalServices);
        const content = formatData(activeId, codeToNameMap);
        return <CardWrapper>
            {
                content.map((service) => {
                    return <Card>
                        <ServiceName>{service["name"]}</ServiceName>
                        {
                            service["cost"] ? <ServiceInfo>
                                <ServiceCost>Rs.{service["cost"]}</ServiceCost>
                                <ServiceDuration>Time : {service["duration"] / 60} hours</ServiceDuration>
                            </ServiceInfo> : null
                        }
                        {
                            service["serviceNames"].map((name) => <ListItem>{name}</ListItem>)
                        }
                        <ButtonWrapper>
                            <ActionButton
                                label = "Add to Cart"
                            />
                        </ButtonWrapper>
                    </Card>
                })
            }
            
        </CardWrapper>
        
    }

}