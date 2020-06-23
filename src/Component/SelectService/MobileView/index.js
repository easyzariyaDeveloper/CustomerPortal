import React, { useState, useEffect } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { ServiceMPageWrapper, MTab, MServiceHeader } from "./style";
import { ServiceTabs,Tabs} from "../mockServiceData";
import { connect } from "react-redux";
import { fetchPackages } from "../Data/action";


function SelectService(props) {

    useEffect(() => {
        props.fetchPackages(props.selectedCarId);
    }, []);
    return<MobilePageLayout>
        <MServiceHeader>Our Services</MServiceHeader>
        <ServiceMPageWrapper>
            <MTab 
                tabs = {ServiceTabs}
                cardInfo = {Tabs}
            />
        </ServiceMPageWrapper>
    </MobilePageLayout>
}

const mapStateToProps = (state) => {
    return {
        packages: state["packages"],
        selectedCarId: state?.profile?.selectedCarId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackages: (carId = "") => { dispatch(fetchPackages(carId)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectService);