import React, { useState } from "react";
import MobilePageLayout from "../../../../Layout/MobileView";
import { withRouter } from "react-router";
import { ImageSlideShow } from "./ImageSlideShow";
import { Packages, GeneralServices, CarCareServices, ElectricalServices } from "../../mockServiceData";
import { ObjectList } from "../ServiceList";
import { FeatureHeader, IndividualService, BottomDiv, AddServiceButton } from "./style";
import TimerIcon from '@material-ui/icons/Timer';

function ServiceDescription(props){
    const {match : {params = {}} = {}} = props;
    console.log(params["mode"], params["type"]);
    
    const pack = params["mode"];
    const id = params["type"];

    const packSelected = pack == "general" ? GeneralServices : pack =="acAndElectrical" ? ElectricalServices :CarCareServices;

    if(id){
        const {name,cost, duration, services} = Packages[pack][id];
        const FullListOfService = [];

        services.map(id =>{
            FullListOfService.push(ObjectList(packSelected)[id])
        })

        return<MobilePageLayout>
        <ImageSlideShow cost={cost} name= {name}/>
        <FeatureHeader>What is included?</FeatureHeader>
        {
            FullListOfService.map(service => <IndividualService>{service}</IndividualService>)
        }
        <BottomDiv>
            <div>
                <TimerIcon style={{ color: "white", fontSize: "25px", verticalAlign: "bottom" }} />
                <p style={{ color: "white", display: "inline-block", padding: "5px", fontSize: "16px"}}>{duration/60}hour </p>
            </div>

            <AddServiceButton>Add</AddServiceButton>
                
        </BottomDiv>
    </MobilePageLayout>
    }
    
} 

export default withRouter(ServiceDescription);