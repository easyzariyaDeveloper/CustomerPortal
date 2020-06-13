import React, { useState } from "react";
import { withRouter } from "react-router";
import MobilePageLayout from "../../../../Layout/MobileView";
import { MServiceListWrapper, ServiceListCard, ServiceListImages, PackageName, PackagesDetails, LeftDiv, RightDiv, ServiceListCardWrapper, CostPara, AddButton, ServiceMenu, ButtonDiv } from "./style";
import { Packages, GeneralServices, CarCareServices, ElectricalServices } from "../../mockServiceData";
import TimerIcon from '@material-ui/icons/Timer';

import { useHistory } from "react-router-dom";




export const ObjectList = (array) => array.reduce((accumulator,service) =>{
    const {name = "", id = ""} = service;
    accumulator = {
        ...accumulator,
        [id]: name
    };
    return accumulator;
},{});




function ServiceList(props){
    const {match : {params = {}} = {}} = props;
    console.log(params["mode"], params["type"]);

    const [packageState, addPackage] = useState(null);

    const serviceId = params["type"];
    const history = useHistory();

    if (serviceId) {   
        const packs = Packages[serviceId];
        const servicePackage = serviceId == "general" ? GeneralServices : serviceId =="acAndElectrical" ? ElectricalServices : CarCareServices;
        
        // const ObjectList = servicePackage.reduce((accumulator,service) =>{
        //     const {name = "", id = ""} = service;
        //     accumulator = {
        //         ...accumulator,
        //         [id]: name
        //     };
        //     return accumulator;
        // },{});

        ObjectList(servicePackage);
        

        return<MobilePageLayout>
            <MServiceListWrapper>
                {Object.entries(packs).map(pack => {
                    const {name,duration,cost,id,ServiceListImg,services} = pack[1];
                    let serviceNameArray = [];
                    
                return <ServiceListCard>
                    <ServiceListCardWrapper href = {`/service-description/${serviceId}/${id}`}>
                        <LeftDiv>
                            <ServiceListImages src={ServiceListImg} alt="image" />
                            <CostPara>Rs.{cost}</CostPara>
                        </LeftDiv>
                        <RightDiv>
                            <PackagesDetails>
                                <PackageName>{name}</PackageName>
                                <TimerIcon style={{ color: "#4B4B4B", fontSize: "13px" }} />
                                <p style={{ color: "#4B4B4B", display: "inline-block", padding: "5px", verticalAlign: "baseline", fontSize: "15px" }}>{duration / 60}hour</p>
                                {services.map((service, index) => {
                                    const fullServiceName = ObjectList(servicePackage)[service];
                                    serviceNameArray.push(fullServiceName);

                                })}

                                
                                <ServiceMenu>{serviceNameArray[0]} </ServiceMenu>
                                <ServiceMenu>{serviceNameArray[1]} </ServiceMenu>
                                <ServiceMenu>{serviceNameArray[2]} </ServiceMenu>
                                {serviceNameArray.length - 3 > 0 ? <p style= {{paddingTop: "3px", fontSize: "13px"}}>+{serviceNameArray.length - 3} more services</p> : ""}
                                
                                
                            </PackagesDetails>
                        </RightDiv>
                        <ButtonDiv>  
                            <p>=</p>   
                            <AddButton onClick={() =>{
                                addPackage(name)
                                history.push('/login')
                            }}>ADD</AddButton>
                            </ButtonDiv> 
                    </ServiceListCardWrapper>
                </ServiceListCard>
        })}    
            </MServiceListWrapper>
        </MobilePageLayout>
    }
   
}

export default withRouter(ServiceList);