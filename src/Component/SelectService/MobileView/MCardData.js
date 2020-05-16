import React from "react";
import ServiceImage from "../../../Assets/img/serviceImage.jpg";
import { ServiceCard, CardImage,ServiceHeader,PriceHeader,ServicePriceDiv, ServiceDescription } from "./style";
import { Packages } from "../mockServiceData";

export default function MCardData(props){
    const {activeId} = props;  

    if(activeId){
        const packs = Object.keys(Packages[activeId]);
        return packs.map((pack) => {
            const {name,cost,duration,services = []} = Packages[activeId][pack];
            const servicesLength = services.length;
        
            return <ServiceCard>
                <CardImage src = {ServiceImage} alt ="image"/> 
                <ServicePriceDiv>
                    <ServiceHeader>{name}</ServiceHeader> 
                    { servicesLength && <PriceHeader>Rs {cost}</PriceHeader> }
                </ServicePriceDiv>

                {servicesLength ? <ServiceDescription>
                    <h3>{servicesLength} services</h3>
                    <h4>{duration/60} hours</h4>
                    <a href = "#" className = "link"> Click to view details</a>
                </ServiceDescription> : null}
                </ServiceCard>
        })}
    }
