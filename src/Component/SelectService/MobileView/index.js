import React, { useState, useEffect, useRef } from "react";

import MobilePageLayout from "../../../Layout/MobileView";
import { ServiceMPageWrapper, MTab,PencilIcon, FilterButton} from "./style";
import { ServiceTabs } from "../mockServiceData";
import { connect } from "react-redux";
import { fetchPackages } from "../Data/action";
import CarIcon from "../../../Assets/img/carIcon.svg";
import EditIcon from "../../../Assets/img/pencil.svg";
import { readCookie } from "../../../util";

import CarCityFilter from "./CarCityFilter";
import { SelectedCarIcon, SelectedCarCard } from "./ServiceDropdown/style";


function SelectService(props) {
    const [packageFilter, setPackageFilter] = useState({
        carId: localStorage.getItem("carSelectedPackage"),
        cityId: localStorage.getItem("citySelectedPackage")
    });

    const[carIconVisiblity, setCarIconVisibility]= useState(false);
    const [showSelectCarPopupVisibility, setSelectCarPopupVisibility] = useState(false);

    const selectedCarId = localStorage.getItem("carSelectedPackage");
    const userId = readCookie("userUUId");

    const matchedCarData = (function () {
        if(userId){
            // localStorage.removeItem('carDetails');
            // let matchedCar = props?.profile?.carList?.find((car) => car["carId"] === selectedCarId) || localStorage.getItem('carDetails') ? JSON.parse(localStorage.getItem('carDetails')) :{}
            // return matchedCar;
            let matchedCar = props?.profile?.carList?.find((car) => car["carId"] === selectedCarId)
            return ( matchedCar ? matchedCar : localStorage.getItem('carDetails') ? JSON.parse(localStorage.getItem('carDetails')) :{})
        } else {
            return localStorage.getItem('carDetails') ? JSON.parse(localStorage.getItem('carDetails')) : {}
        }
    })();
    //const matchedCarData = props?.profile?.carList?.find((car) => car["carId"] === selectedCarId);


    useEffect(() => {
        if(packageFilter.cityId && packageFilter.carId){
            props.fetchPackages(packageFilter);
        }
    }, [packageFilter.cityId,packageFilter.carId]);

    return<MobilePageLayout pageName = "Our Services">
        {
            (!(localStorage.getItem("citySelectedPackage") && localStorage.getItem("carSelectedPackage")) || showSelectCarPopupVisibility) ? 
            <CarCityFilter 
                fetchData = {(filter) => {
                    setSelectCarPopupVisibility(false)
                    setCarIconVisibility(false)
                    props.fetchPackages(filter)
                }}
            /> : 
            (!props.inProgress ? <ServiceMPageWrapper>
                <MTab 
                    tabs = {ServiceTabs}
                    cardInfo = {props?.packages}
                    packageFilter = {packageFilter}
                />
                <SelectedCarIcon src={CarIcon} onClick= {()=>setCarIconVisibility(!carIconVisiblity)}/>
                <SelectedCarCard visibility={carIconVisiblity}>
                    <p>{`${matchedCarData?.["brand"]} ${matchedCarData?.["carName"]}`}</p>
                    {/* <p style = {{"textTransform": "capitalize", "marginTop": "10px"}}>{matchedCarData?.variantName?.toLowerCase()}</p> */}
                    <FilterButton onClick = {() => setSelectCarPopupVisibility(true)}>
                        Change
                    </FilterButton>
                </SelectedCarCard>
            </ServiceMPageWrapper> : null) 
        }
    </MobilePageLayout>
}

const mapStateToProps = (state) => {
    return {
        inProgress: state?.packages?.["inProgress"],
        packages: state?.packages?.["packages"],
        profile: state?.profile,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackages: (filter = {}) => { dispatch(fetchPackages(filter))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectService);