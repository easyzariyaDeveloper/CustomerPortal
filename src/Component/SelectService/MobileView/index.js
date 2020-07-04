import React, { useState, useEffect } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { ServiceMPageWrapper, MTab, MServiceHeader } from "./style";
import { ServiceTabs,Tabs} from "../mockServiceData";
import { connect } from "react-redux";
import { fetchPackages } from "../Data/action";

import { makeStyles } from "@material-ui/core/styles";
import { base_spacing } from "../../../Assets/style-var";
import { fetchBrandForCars, fetchCarListByBrand } from "../../AddCar/Data/action";


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: `0px ${base_spacing}px ${base_spacing}px`,
        minWidth: 120,
        display: `flex`
    }
}));

function SelectService(props) {
    useEffect(() => {
        props.fetchPackages(props.selectedCarId);
    }, []);

    return<MobilePageLayout>
        <MServiceHeader>Our Services</MServiceHeader>
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
        selectedCarId: state?.profile?.selectedCarId,
        brands: state?.brandsInServices?.brands,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackages: (carId = "") => { dispatch(fetchPackages(carId)) },
        fetchBrandForCars: () => { dispatch(fetchBrandForCars())},
        fetchCarModels: (carBrand = "") => {dispatch(fetchCarListByBrand(carBrand))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectService);