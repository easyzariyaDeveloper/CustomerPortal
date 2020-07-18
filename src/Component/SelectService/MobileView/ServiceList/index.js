import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import MobilePageLayout from "../../../../Layout/MobileView";
import { MServiceListWrapper, ServiceListCard, ServiceListImages, PackageName, PackagesDetails, LeftDiv, RightDiv, ServiceListCardWrapper, CostPara, AddButton, ServiceMenu, ButtonDiv, TimerPara, TickImg, ServiceCount, ListImg, CarListInDialog, CarCollapseInDialog, CollapseInDialogDiv} from "./style";
import { connect } from "react-redux";
import { fetchPackageById, addSubPackage, removeSubPackage } from "../../Data/action";
import defaultImg from "../../../../Assets/img/gold.jpg";
import Tick from "../../../../Assets/img/gradient tick.jpg"
import Lists from "../../../../Assets/img/lists.jpg"
import TimerIcon from '@material-ui/icons/Timer';
import { makeStyles } from "@material-ui/core/styles";
import { base_spacing } from "../../../../Assets/style-var";
import { readCookie } from "../../../../util";

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

    const [collapse, setCollapse] = useState(false);
    const[car, setCar] = useState("");
    const [showCarMisMatchWarning, setShowCarMisMatchWarning] = useState(false);
    const [filter, setFilter] = useState({});

    function carMisMatchWarningPopup(){
        return <Dialog
            open={showCarMisMatchWarning}
            disableBackdropClick = {true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Car Mismatch - Reselecting the Car from Profile"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           We found mismatch the car
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick = {() => {
              const {carId, fuelVariantId} = props?.profile?.carList[0];
              if(carId && fuelVariantId){
                setFilter({
                    carId: carId,
                    variantId: fuelVariantId,
                    cityId: sessionStorage.getItem("citySelectedPackage")
                  });
              }
              sessionStorage.removeItem("carSelectedPackage");
              sessionStorage.removeItem("citySelectedPackage");
              setCollapse(!collapse);
            }} color="primary">
            Revert
          </Button>
          <Button onClick = {() => {
              const carId = sessionStorage.getItem("carSelectedPackage");
              sessionStorage.removeItem("carSelectedPackage");
              setShowCarMisMatchWarning(false);
              window.location.href = `/add-car?carId=${carId}&redirect=${location.pathname}`;
            }} color="primary">
            Add Car
          </Button>
        </DialogActions>
    
        <CollapseInDialogDiv>
        <CarCollapseInDialog in={collapse} collapsedHeight={1}>
            <FormControl style = {{width:200}}>
            <InputLabel id="demo-simple-select-label">Your Car</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={car}
                    onChange= {(event)=>{
                        setCar(event.target.value)
                        sessionStorage.setItem("carSelectedPackage",event.target.value)
                        setShowCarMisMatchWarning(false);
                    }}
            >
                {
                    props?.profile.carList.map(({carName,carId})=>{
                        return <MenuItem value = {carId}>{carName}</MenuItem>
                    })   
                }
            </Select>
        </FormControl>
        </CarCollapseInDialog>
        </CollapseInDialogDiv>
      </Dialog>
    }


    function addSubPackage(){
        props.addPackage(serviceKeyId,code)
    }

    useEffect(() => {
        props.fetchPackageById(params["type"], filter);
    }, [filter?.carId]);

    useEffect(() => {
        const {carList = []} = props.profile;
        const carSelectedAnonymously = sessionStorage.getItem("carSelectedPackage");
        const matchedCarData = carList.find((car) => car["carId"] === carSelectedAnonymously);
        if(
            carList.length > 0 &&  
            carSelectedAnonymously && 
            matchedCarData?.["carId"] !== carSelectedAnonymously
        ){
            setShowCarMisMatchWarning(true);
        } else if(carList.length > 0 && matchedCarData?.["carId"] === carSelectedAnonymously){
            const {carId, fuelVariantId } = matchedCarData;
            setFilter({
                carId: carId,
                variantId: fuelVariantId,
                cityId: sessionStorage.getItem("citySelectedPackage")
            });
        }
    }, [props?.profile?.customerId])

    if (serviceId) {
        return <MobilePageLayout pageName = {packageData[0] && packageData[0]["label"]}>
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
                                        userId ? addSubPackage() : location.href = `/login?referrer=${location.pathname}?carId=${sessionStorage.getItem("carSelectedPackage")}&cityId=${sessionStorage.getItem("citySelectedPackage")}`
                                    }}>
                                    Add</AddButton>
                                </ButtonDiv>
                            </ServiceListCard>
                        }) : null
                    })
                }
                {showCarMisMatchWarning && carMisMatchWarningPopup()}
            </MServiceListWrapper>
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
        removeSubPackage: () => { dispatch(removeSubPackage()) }

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceList));
