import React, { useEffect, useRef, useState } from "react";
import MobilePageLayout from "../../../../Layout/MobileView";
import { withRouter } from "react-router";
import { ImageSlideShow } from "./ImageSlideShow";
import { FeatureHeader, IndividualService, BottomDiv, 
    AddServiceButton, TickImage, ServiceTimePara, TimeDurationWrapper,
    SeviceDetailPageWrapper,
    FuelCard,
    FuelIcon,
    FuelCardWrapper
 } from "./style";
import TimerIcon from '@material-ui/icons/Timer';
import { connect } from "react-redux";
import {addSubPackage,fetchPackageById} from "../../Data/action";
import Tick from "../../../../Assets/img/gradient tick.jpg"
import { EZCard } from "../../../Common/MobileCard";
import FloatingCarDetails from "../ServiceDropdown/FloatingCarDetails";
import Skeleton from "@material-ui/lab/Skeleton";




function ServiceDescription(props) {
    const { match: { params = {} } = {} } = props;
    const serviceId = params["mode"];
    const codeId = params["packageCode"];
    const packageId = params["packageId"];
    const selectedCityId = new URLSearchParams(window.location.search).get("cityId") || localStorage.getItem("citySelectedPackage"); 
    const selectedCarId = localStorage.getItem("carSelectedPackage");
    const matchedCarData = props?.profile?.carList?.find((car) => car["carId"] === selectedCarId);
    const activeSubPackage = useRef();
    const [car, setCar] = useState([]);

    function addSubPackage(selectedCity){
        const selectedCar = props?.profile?.carList?.find((car) => car["carId"] === selectedCarId);
        const itemIdObj = {
            itemId: packageId,
            subPackageName: codeId,
            quantity:1,
            "itemType": "PACKAGE",
            service:true,
            package:true
        };
        props.addSubPackage(selectedCar ,selectedCity,itemIdObj)
    }
    

    useEffect(() => {
        props.fetchPackageById(params["packageId"], {
            carId: selectedCarId,
            cityId: selectedCityId
        });
    }, []);

    useEffect(() => {
        let carObj = {}
        props?.packages?.[serviceId].forEach(({packages = []}) => {
            packages.forEach(subPack => {
                if(subPack.code === codeId){
                    activeSubPackage.current = subPack;
                }
            });
        });
        if(props?.packages?.[serviceId].length > 0){
            const {carList = []} = props?.packages?.[serviceId]?.[0];
            setCar(carList.find(({id}) => (id === selectedCarId))) 
        }
    }, [props.packages[serviceId].length])

    const variants = car?.variants ? Object.entries(car?.variants) : {};
    if (serviceId) {
        return <MobilePageLayout pageName ={activeSubPackage?.current?.name}>
        {
           activeSubPackage?.current ? <>
            <SeviceDetailPageWrapper>
                <ImageSlideShow price={activeSubPackage?.current?.price} name={activeSubPackage?.current?.name} />
                <EZCard>
                    {/* <FeatureHeader>Prices</FeatureHeader> */}
                    <FuelCardWrapper>
                    {variants?.map((variantObj = {}, index = {}) => {
                        const [variantId, variantName = ""] = variantObj;
                        return <FuelCard className = {matchedCarData?.variantName === variantName ? "active" : ""}>
                            <FuelIcon className = {`icon-${variantName.toLowerCase()} ${matchedCarData?.variantName === variantName ? "active" : ""} `}></FuelIcon>
                            <p style={{"marginBottom": "10px"}}>&#8377; {activeSubPackage?.current?.pricing?.[0]?.price?.[variantId] || "NA"}</p>
                        </FuelCard>
                    })}
                    </FuelCardWrapper>
                </EZCard>

                <EZCard style = {{"margin": "20px 15px 0 15px"}}>
                    <FeatureHeader>What is included?</FeatureHeader>
                        { activeSubPackage?.current?.services.map(serviceName => <IndividualService><TickImage src = {Tick}/> {serviceName}</IndividualService>) }
                    <FloatingCarDetails bottomPosition = {"60px"} 
                        car = {`${matchedCarData?.["brand"]} ${matchedCarData?.["carName"]}`}
                        variantName = {matchedCarData?.variantName}
                    />
                </EZCard>

                <BottomDiv>
                    <TimeDurationWrapper>
                        <TimerIcon style={{ color: "white", fontSize: "25px", verticalAlign: "bottom" }} />
                        <ServiceTimePara>{activeSubPackage?.current?.serviceTime > 0 ? activeSubPackage?.current?.serviceTime / 60 : 0}hour</ServiceTimePara>
                    </TimeDurationWrapper>
                    <AddServiceButton onClick={() => addSubPackage(selectedCityId)}>Add</AddServiceButton>
                </BottomDiv>
            </SeviceDetailPageWrapper>
           </> : <>
                <Skeleton animation="wave" height={250} width="90%" style = {{margin : "0 auto"}}></Skeleton>
                <Skeleton animation="wave" height={200} width="90%" style = {{margin : "0 auto"}}></Skeleton>
                <Skeleton animation="wave" height={400} width="90%" style = {{margin : "0 auto"}}></Skeleton>
           </>
        }
        </MobilePageLayout>
    }
}


const mapStateToProps = (state) => {
    return {
        packages: state?.packages?.["packages"],
        profile: state?.profile,
        error: state?.loading?.error,
        inProgress: state?.subPackages?.["inProgress"],
        subPackages: state?.subPackages?.subPackages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackageById: (packageId = "", filter = {}) => { dispatch(fetchPackageById(packageId, filter)) },
        addSubPackage: (car = {},city="", itemIdObj ={}) => { dispatch(addSubPackage(car,city,itemIdObj))},
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceDescription));