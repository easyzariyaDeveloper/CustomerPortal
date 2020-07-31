import React, { useEffect,useState } from "react";
import MobilePageLayout from "../../../../Layout/MobileView";
import { withRouter } from "react-router";
import { ImageSlideShow } from "./ImageSlideShow";
import { FeatureHeader, IndividualService, BottomDiv, 
    AddServiceButton, TickImage, ServiceTimePara, TimeDurationWrapper,
    SeviceDetailPageWrapper
 } from "./style";
import TimerIcon from '@material-ui/icons/Timer';
import { connect } from "react-redux";
import { fetchPackageById, addSubPackage} from "../../Data/action";
import Tick from "../../../../Assets/img/gradient tick.jpg"
import { EZCard } from "../../../Common/MobileCard";
import FloatingCarDetails from "../ServiceDropdown/FloatingCarDetails";




function ServiceDescription(props) {
    const { match: { params = {} } = {} } = props;
    console.log(params["mode"], params["packageCode"],params["packageId"]);

  

    const serviceId = params["mode"];
    const codeId = params["packageCode"];
    const packageId = params["packageId"];

    const selectedCityId = new URLSearchParams(window.location.search).get("cityId") || localStorage.getItem("citySelectedPackage"); 
    const selectedCarId = localStorage.getItem("carSelectedPackage");
    const itemIdObj = {
        itemId: packageId,
        subPackageName: codeId,
        quantity:1,
        "itemType": "PACKAGE",
        service:true,
        package:true
    }
    
    const matchedCarData = props?.profile?.carList?.find((car) => car["carId"] === selectedCarId);

    function addSubPackage(){
        props.addSubPackage(matchedCarData,selectedCityId,itemIdObj)
    }
    

    useEffect(() => {
        props.fetchPackageById(params["packageId"]);
    }, []);


    if (serviceId) {
        return <MobilePageLayout pageName ={sessionStorage.getItem("service")} >
        { props.packages[serviceId].map(pack => {
            return pack.packages.map(subPack => {
                return subPack.code == codeId ? (<SeviceDetailPageWrapper>
                    <ImageSlideShow price={subPack.price} name={subPack.name} />

                    {sessionStorage.setItem("service", subPack.name)}

                    <EZCard style = {{"margin": "20px 15px 0 15px"}}>
                        <FeatureHeader>What is included?</FeatureHeader>

                            {
                                
                                subPack.services.map(seviceId => {
                                    return <IndividualService><TickImage src = {Tick}/> {seviceId.name}</IndividualService>
                                })
                            }

                        <FloatingCarDetails bottomPosition = {"60px"}/>
                    </EZCard>

                    <BottomDiv>
                        <TimeDurationWrapper>
                            <TimerIcon style={{ color: "white", fontSize: "25px", verticalAlign: "bottom" }} />
                            <ServiceTimePara>{subPack.serviceTime > 0 ? subPack.serviceTime / 60 : 0}hour</ServiceTimePara>
                        </TimeDurationWrapper>

                        <AddServiceButton onClick={()=> {
                            addSubPackage()}}>Add</AddServiceButton>
                        {props?.error ? console.log(props?.error): ""}
                    </BottomDiv>
                    </SeviceDetailPageWrapper> ):null   
            })
            })}
            </MobilePageLayout>
    }
}


const mapStateToProps = (state) => {
    return {
        inProgress: state?.packages?.["inProgress"],
        packages: state?.packages?.["packages"],
        profile: state?.profile,
        error: state?.loading?.error,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackageById: (packageId = "") => { dispatch(fetchPackageById(packageId)) },
        addSubPackage: (car = {},city="", itemIdObj ={}) => { dispatch(addSubPackage(car,city,itemIdObj))},
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceDescription));