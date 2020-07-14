import React, { useState, useEffect } from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MobilePageLayout from "../../../Layout/MobileView";
import { ServiceMPageWrapper, MTab, DropDrownWrapper, ResetButton } from "./style";
import { ServiceTabs,Tabs} from "../mockServiceData";
import { connect } from "react-redux";
import { fetchPackages, fetchCar } from "../Data/action";

import { makeStyles } from "@material-ui/core/styles";
import { base_spacing } from "../../../Assets/style-var";
import CarList from "./ServiceDropdown/carList";
import CityList from "./ServiceDropdown/cityList";

import { FilterWrapper } from "./ServiceDropdown/style";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: `0px ${base_spacing}px ${base_spacing}px`,
        minWidth: 120,
        display: `flex`
    }
}));

function SelectService(props) {
    const [filter, setFilter] = useState({});

    const [collapsed, setCollapsed] = useState(false);

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
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >Filter
                </AccordionSummary>
                <AccordionDetails style={{display: "grid"}}>
                <FilterWrapper>
                    <CarList onChange = {value => {getServicePackage("carId", value)}} value={filter.carId} />
                    <CityList onChange = {value => {getServicePackage("cityId", value)}} value={filter.cityId}/>
                    </FilterWrapper>
                <ResetButton onClick={()=> setFilter({carId:"",cityId:""})}>Reset</ResetButton>
                </AccordionDetails>    
            </Accordion>
        </DropDrownWrapper>
        
        {!props.inProgress ? <ServiceMPageWrapper>
            <MTab 
                tabs = {ServiceTabs}
                cardInfo = {props?.packages}
                filter = {filter}
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