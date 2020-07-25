import React, { useState, useEffect } from "react";

import MobilePageLayout from "../../../Layout/MobileView";
import { ServiceMPageWrapper, MTab, CarCityWrapper, OverlayLabel, OverlayCard,CityWrapper, FilterButton, RightNavigator, LeftNavigator } from "./style";
import { ServiceTabs,Tabs} from "../mockServiceData";
import { connect } from "react-redux";
import { fetchPackages, fetchCar } from "../Data/action";


import { FilterWrapper } from "./ServiceDropdown/style";
import { OverLay } from "../../../Layout/styles";

import CarCityFilter from "./CarCityFilter";


function SelectService(props) {

    const [packageFilter,setPackageFilter] = useState({
        carId: localStorage.getItem("carSelectedPackage"),
        cityId: localStorage.getItem("citySelectedPackage")

    });
    console.log(packageFilter);
    
  
    useEffect(() => {
        props.fetchPackages(packageFilter);
    }, [packageFilter.cityId,packageFilter.carId]);

    return<MobilePageLayout pageName = "Our Services">
        {
            localStorage.getItem("citySelectedPackage") && localStorage.getItem("carSelectedPackage")?
            (!props.inProgress ? <ServiceMPageWrapper>
                <MTab 
                    tabs = {ServiceTabs}
                    cardInfo = {props?.packages}
                    packageFilter = {packageFilter}
                />
            </ServiceMPageWrapper> : null) : 
            <CarCityFilter 
            packageFilter= {setPackageFilter}
                fetchPackages = {fetchPackages}
            />
        }
        
    </MobilePageLayout>
}

const mapStateToProps = (state) => {
    return {
        inProgress: state?.packages?.["inProgress"],
        packages: state?.packages?.["packages"],
        brands: state?.brandsInServices?.brands,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackages: (filter = {}) => { dispatch(fetchPackages(filter))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectService);