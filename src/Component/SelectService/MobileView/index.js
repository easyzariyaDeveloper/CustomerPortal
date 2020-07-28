import React, { useState, useEffect, useRef } from "react";

import MobilePageLayout from "../../../Layout/MobileView";
import { ServiceMPageWrapper, MTab,PencilIcon, FilterButton} from "./style";
import { ServiceTabs } from "../mockServiceData";
import { connect } from "react-redux";
import { fetchPackages } from "../Data/action";
import CarIcon from "../../../Assets/img/carIcon.svg";
import EditIcon from "../../../Assets/img/pencil.svg";


import CarCityFilter from "./CarCityFilter";
import { SelectedCarIcon, SelectedCarCard } from "./ServiceList/style";


function SelectService(props) {
    const [packageFilter, setPackageFilter] = useState({
        carId: localStorage.getItem("carSelectedPackage"),
        cityId: localStorage.getItem("citySelectedPackage")
    });

    const[carIconVisiblity, setCarIconVisibility]= useState(false);
    const [showSelectCarPopupVisibility, setSelectCarPopupVisibility] = useState(false);

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
                
                <PencilIcon src = {EditIcon}/>
                <SelectedCarIcon src={CarIcon} onClick= {()=>setCarIconVisibility(!carIconVisiblity)}/>
                
                <SelectedCarCard visibility={carIconVisiblity}>
                    <p>Selected Car: Aveo </p>
                    <FilterButton onClick = {() => setSelectCarPopupVisibility(true)}>
                        Change Car
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackages: (filter = {}) => { dispatch(fetchPackages(filter))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectService);