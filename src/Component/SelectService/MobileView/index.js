import React, { useState, useEffect } from "react";
import MobilePageLayout from "../../../Layout/MobileView";
import { ServiceMPageWrapper, MTab, MServiceHeader } from "./style";
import { ServiceTabs,Tabs} from "../mockServiceData";
import { connect } from "react-redux";
import { fetchPackages } from "../Data/action";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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

    const classes = useStyles();
    const [vehicleBrand, setVehicleBrand] = React.useState({
        brand: "",
    });

    useEffect(() => {
        props.fetchPackages(props.selectedCarId);
        props.fetchBrandForCars();
    }, []);

    
    
    return<MobilePageLayout>
        <MServiceHeader>Our Services</MServiceHeader>

        <FormControl className={classes.formControl} >
                    <InputLabel id="demo-simple-select-label">Select Brand</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={vehicleBrand.brand}
                        onChange={(event) => {setVehicleBrand({brand: event.target.value})
                            props.fetchCarModels(event.target.value)
                        }}
                        autoWidth
                    >   
                    {props.brands? props.brands.map((carBrand) =>{
                        return <MenuItem value = {carBrand} key = {carBrand}>{carBrand}</MenuItem>
                    }) :null}
                    </Select>
                </FormControl>

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