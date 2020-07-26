import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import MobilePageLayout from "../../../../Layout/MobileView";
import { MServiceListWrapper, ServiceListCard, ServiceListImages, PackageName, PackagesDetails, LeftDiv, RightDiv, ServiceListCardWrapper, CostPara, AddButton, ServiceMenu, ButtonDiv, TimerPara, TickImg, ServiceCount, ListImg, CarListInDialog, CarCollapseInDialog, CollapseInDialogDiv, SelectedCarIcon, SelectedCarCard} from "./style";
import { connect } from "react-redux";
import { fetchPackageById, addSubPackage, removeSubPackage } from "../../Data/action";
import defaultImg from "../../../../Assets/img/gold.jpg";
import Tick from "../../../../Assets/img/gradient tick.jpg"
import Lists from "../../../../Assets/img/lists.jpg"
import TimerIcon from '@material-ui/icons/Timer';
import { makeStyles } from "@material-ui/core/styles";
import { base_spacing } from "../../../../Assets/style-var";
import { readCookie } from "../../../../util";
import CarIcon from "../../../../Assets/img/carIcon.jpg"
import CarCityFilter from "../CarCityFilter";


export const ObjectList = (array) => array.reduce((accumulator, service) => {
    const { name = "", id = "" } = service;
    accumulator = {
        ...accumulator,
        [id]: name
    };
    return accumulator;
}, {});


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: `0px ${base_spacing }px ${base_spacing}px`,
        minWidth: 120,
        display: `flex`
    }
}));

const userId = readCookie("userUUId");
function ServiceList(props) {
    const { match: { params = {} } = {} } = props;
    const serviceId = params["mode"];
    const serviceKeyId = params["type"];
    const packageData = props?.packages[serviceId];

    const[carIconVisiblity, setCarIconVisibility]= useState(false);

    const [collapse, setCollapse] = useState(false);
    const[car, setCar] = useState("");
    const [showCarMisMatchWarning, setShowCarMisMatchWarning] = useState(false);
    const [filter, setFilter] = useState({});

    const selectedCityId = new URLSearchParams(window.location.search).get("cityId") || sessionStorage.getItem("citySelectedPackage"); 
    const selectedCarId = sessionStorage.getItem("carSelectedPackage");
    const itemIdObj = {
        itemId: serviceKeyId,
        quantity:1,
        "itemType": "PACKAGE"
    }
    
    const matchedCarData = props?.profile?.carList.find((car) => car["carId"] === selectedCarId);


    useEffect(() => {
        props.fetchPackageById(params["type"], filter);
    }, [filter?.carId]);


    if (serviceId) {
        return <MobilePageLayout pageName = {packageData[0] && packageData[0]["label"]}>
            {
            localStorage.getItem("citySelectedPackage") && localStorage.getItem("carSelectedPackage") ?
                <MServiceListWrapper>
                {
                    props.packages[serviceId].map(pack => {
                        return pack.id == serviceKeyId ? pack.packages.map(subPacks => {
                            const { name, serviceTime, images, price, code, services } = subPacks;
                            return <ServiceListCard key = {code}>
                                <ServiceListCardWrapper href = {`/service-description/${serviceId}/${serviceKeyId}/${code}`}>
                                <LeftDiv>
                                    <ServiceListImages src={images ? images[0] : defaultImg} alt="image" />
                                    <CostPara>Rs.{price}</CostPara>
                                </LeftDiv>
                                <RightDiv>
                                    <PackagesDetails>
                                        <PackageName>{name}</PackageName>
                                        <TimerPara>
                                            <TimerIcon style = {{color: "#4B4B4B", fontSize:"12px", marginRight: "5px"}}/>
                                            {serviceTime > 0 ? serviceTime / 60 : 0}hour
                                        </TimerPara>

                                        
                                        <ServiceMenu>{services[0].name}<TickImg src= {Tick}/></ServiceMenu>
                                        <ServiceMenu>{services[1].name}<TickImg src= {Tick}/></ServiceMenu>
                                        <ServiceMenu>{services[2].name}<TickImg src= {Tick}/></ServiceMenu>
                                        {services.length - 3 > 0 ? <ServiceCount>+{services.length - 3} more services</ServiceCount> : ""}
                                    </PackagesDetails>
                                </RightDiv>
                                </ServiceListCardWrapper>
                                <ButtonDiv>
                                    <ListImg src =  {Lists} />
                                    <AddButton onClick ={() => {
                                        userId ? props.addSubPackage(matchedCarData, selectedCityId,{...itemIdObj,subPackageName: code}) : 
                                        location.href = `/login?referrer=${location.pathname}?carId=${sessionStorage.getItem("carSelectedPackage")}&cityId=${sessionStorage.getItem("citySelectedPackage")}`
                                    }}>
                                    Add</AddButton>
                                </ButtonDiv>
                            </ServiceListCard>
                        }) : null
                    })
                }
                {showCarMisMatchWarning && carMisMatchWarningPopup()}
                <button onClick = {() =>{
                    location.href = `/add-car?redirect=${location.pathname}`
                }}>
                    Change Car</button>
                    
                <SelectedCarIcon src={CarIcon} onClick= {()=>setCarIconVisibility(!carIconVisiblity)}/>
                <SelectedCarCard visibility={carIconVisiblity}>Car Selected: {matchedCarData?.carName}</SelectedCarCard>
            </MServiceListWrapper> : 
            <CarCityFilter 
                fetchData = {(filter) => props.fetchPackageById(params["type"], filter)}
            />
        }
        </MobilePageLayout>
    }

}


const mapStateToProps = (state) => {
    return {
        inProgress: state?.packages?.["inProgress"],
        packages: state?.packages?.["packages"],
        subPackages: state?.subPackages?.subPackageLabel,
        profile: state?.profile,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackageById: (packageId = "", filter = {}) => { dispatch(fetchPackageById(packageId, filter)) },
        addSubPackage: (packageId = "",code ="") => { dispatch(addSubPackage(packageId,code)) },

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceList));
