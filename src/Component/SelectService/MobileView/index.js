import React, { useState, useEffect } from "react";

import MobilePageLayout from "../../../Layout/MobileView";
import { ServiceMPageWrapper, MTab} from "./style";
import { ServiceTabs } from "../mockServiceData";
import { connect } from "react-redux";
import { fetchPackages } from "../Data/action";


import CarCityFilter from "./CarCityFilter";


function SelectService(props) {

    const [packageFilter, setPackageFilter] = useState({
        carId: localStorage.getItem("carSelectedPackage"),
        cityId: localStorage.getItem("citySelectedPackage")
    });

    useEffect(() => {
        if(packageFilter.cityId && packageFilter.carId){
            props.fetchPackages(packageFilter);
        }
    }, [packageFilter.cityId,packageFilter.carId]);

    return<MobilePageLayout pageName = "Our Services">
        {
            localStorage.getItem("citySelectedPackage") && localStorage.getItem("carSelectedPackage") ?
            (!props.inProgress ? <ServiceMPageWrapper>
                <MTab 
                    tabs = {ServiceTabs}
                    cardInfo = {props?.packages}
                    packageFilter = {packageFilter}
                />
            </ServiceMPageWrapper> : null) : 
            <CarCityFilter 
                fetchData = {(filter) => props.fetchPackages(filter)}
            />
        }
    </MobilePageLayout>
}

const mapStateToProps = (state) => {
    return {
        inProgress: state?.packages?.["inProgress"],
        packages: state?.packages?.["packages"],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackages: (filter = {}) => { dispatch(fetchPackages(filter))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectService);