import React, { useState, useEffect } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { ServiceMPageWrapper, MTab, DropDrownWrapper,MServiceCard } from "./style";
import { ServiceTabs,Tabs} from "../mockServiceData";
import { connect } from "react-redux";
import { fetchPackages, fetchCar } from "../Data/action";

import { makeStyles } from "@material-ui/core/styles";
import { base_spacing } from "../../../Assets/style-var";
import CarList from "./ServiceDropdown/carList";
import CityList from "./ServiceDropdown/cityList";



const useStyles = makeStyles(theme => ({
    formControl: {
        margin: `0px ${base_spacing}px ${base_spacing}px`,
        minWidth: 120,
        display: `flex`
    }
}));

function SelectService(props) {
    const [filter, setFilter] = useState({});

    function getServicePackage(type = "", value = ""){
        const latestFilter = {
            ...filter,
            [type]: value
        };
        setFilter(latestFilter);
        props.fetchPackages(latestFilter);
    }

    useEffect(() => {
        props.fetchPackages(props.selectedCarId);
        props.fetchCar();
    }, []);

    return<MobilePageLayout pageName = "Our Services">
        <DropDrownWrapper>
            <MServiceCard>
                <CarList onChange = {value => {getServicePackage("carId", value)}}/>
                <CityList onChange = {value => {getServicePackage("cityId", value)}}/>
            </MServiceCard>
        </DropDrownWrapper>
        
        {!props.inProgress ? <ServiceMPageWrapper>
            <MTab 
                tabs = {ServiceTabs}
                cardInfo = {props?.packages}
            />
        </ServiceMPageWrapper> : null}
        
    </MobilePageLayout>
}

const mapStateToProps = (state) => {
    return {
        inProgress: state?.packages?.["inProgress"],
        packages: state?.packages?.["packages"],
        selectedCarId: state?.profile?.["selectedCarId"],
        brands: state?.brandsInServices?.brands,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackages: (filter = {}) => { dispatch(fetchPackages(filter))},
        fetchCar: () => {dispatch(fetchCar())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectService);