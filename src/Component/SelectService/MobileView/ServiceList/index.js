import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import MobilePageLayout from "../../../../Layout/MobileView";
import { MServiceListWrapper, ServiceListCard, ServiceListImages, PackageName, PackagesDetails, LeftDiv, RightDiv, ServiceListCardWrapper, CostPara, AddButton, ServiceMenu, ButtonDiv, TimerPara, TickImg, ServiceCount, ListImg, CarListInDialog, CarCollapseInDialog, CollapseInDialogDiv} from "./style";
import { connect } from "react-redux";
import { fetchPackageById, addSubPackage, setCarToCart } from "../../Data/action";
import PackageImage from "../../Images";
import Tick from "../../../../Assets/img/gradient tick.jpg"
import Lists from "../../../../Assets/img/lists.jpg"
import carMismatch from "../../../../Assets/img/carMismatch.svg"
import TimerIcon from '@material-ui/icons/Timer';
import { makeStyles } from "@material-ui/core/styles";
import { base_spacing } from "../../../../Assets/style-var";
import { readCookie } from "../../../../util";
import CarCityFilter from "../CarCityFilter";
import FloatingCarDetails from "../ServiceDropdown/FloatingCarDetails";


import {DialogTitle,DialogContentText,DialogContent,DialogActions,Dialog,Button} from '@material-ui/core';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { EZCard } from "../../../Common/MobileCard";


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
    const [filter, setFilter] = useState({
        carId: localStorage.getItem("carSelectedPackage"),
        cityId: localStorage.getItem("citySelectedPackage")
    });

    

    const selectedCityId = new URLSearchParams(window.location.search).get("cityId") || localStorage.getItem("citySelectedPackage"); 
    const selectedCarId = localStorage.getItem("carSelectedPackage");
    const itemIdObj = {
        itemId: serviceKeyId,
        quantity:1,
        "itemType": "PACKAGE",
        service:true,
        package:true
    }

    const matchedCarData = props?.profile?.carList?.find((car) => car["carId"] === selectedCarId);

    function carMisMatchWarningPopup(){
        return <Dialog
            open={showCarMisMatchWarning}
            disableBackdropClick = {true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <img src = {carMismatch}/>
        <DialogTitle id="alert-dialog-title" style= {{textAlign: "center",padding: "0px"}}>Car Mismatch</DialogTitle>
        <DialogContent style= {{padding: "8px"}}>
          <DialogContentText id="alert-dialog-description" style= {{marginBottom: "0px", fontSize: "13px"}}>
            We found a Car Mismatch. Please reselect the car.
          </DialogContentText>
        </DialogContent>
        <DialogActions style = {{display: "flex", justifyContent: "space-around"}}>
            {
                Object.keys(props?.cart).length > 0 ? <Button onClick = {() => {
                    const selectedCarId = localStorage.getItem("carSelectedPackage");
                    const carObj = props?.profile?.carList.find((car) => car["carId"] === selectedCarId);
                    console.log(selectedCarId)
                    console.log(props?.profile?.carList)
                    const {carId, fuelVariantId} = carObj;
                     if(carId && fuelVariantId){
                       setFilter({
                           carId: carId,
                           variantId: fuelVariantId,
                           cityId: localStorage.getItem("citySelectedPackage")
                         });
                     }
                     props.setCarToCart(carObj);
                    setCollapse(!collapse);
                  }} color="primary" variant="contained">
                  Revert
                </Button> : null
            }
          
          {console.log(props?.profile.carList)}
          {
            props?.profile.carList.map(({carId}) => {
                return carId == localStorage.getItem("carSelectedPackage")
            }).includes(true) ? null : <Button onClick = {() => {
                const carId = localStorage.getItem("carSelectedPackage");
                setShowCarMisMatchWarning(false);
                window.location.href = `/add-car?carId=${carId}&redirect=${location.pathname}`;
            }} color="primary" variant="contained">
            Add Car 
            </Button>
          }
          
        </DialogActions>
    
        <CollapseInDialogDiv>
        <CarCollapseInDialog in={collapse} collapsedHeight={1} style={{padding: "0 10px 10px 10px"}}>
            <FormControl style = {{width:200}}>
            <InputLabel id="demo-simple-select-label">Your Car</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={car}
                    onChange= {(event)=>{
                        setCar(event.target.value)
                        localStorage.setItem("carSelectedPackage",event.target.value)
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

    useEffect(() => {
        props.fetchPackageById(params["type"], filter);
    }, [filter?.carId]);

    useEffect(() => {
        const carSelectedAnonymously = localStorage.getItem("carSelectedPackage");
        console.log(props?.profile)
        // console.log(props?.profile?.carList[0]?.carId)

        //if(userId){  --earlier & changed on 06/12/2020
        if(userId && props?.profile?.carList){
            const selectedCarId = props?.cart?.car?.carId || (props?.profile?.carList.find(({carId}) => carId == carSelectedAnonymously) || props?.profile?.carList[0])?.carId
            //cart car is not same as car in local storage
            if( selectedCarId && selectedCarId != carSelectedAnonymously){
                setShowCarMisMatchWarning(true);
            } //cart car is not there in the profile
            else if(selectedCarId && !props?.profile?.carList.filter(({carId}) => (carId == selectedCarId))){
                setShowCarMisMatchWarning(true);
            }else if(selectedCarId){
                setFilter({
                    carId: selectedCarId,
                    variantId: props?.cart?.car?.fuelVariantId,
                    cityId: localStorage.getItem("citySelectedPackage")
                })
            }
        }
    }, [props?.cart?.id, props?.profile?.customerId]);

      function addToCart(code){
        if(userId){
            let carObj = matchedCarData;
            if(props?.cart?.cart?.car?.carId && props?.cart?.cart?.car?.carId != selectedCarId ){
                carObj = props?.profile?.carList.find(car => car["carId"] == selectedCarId);
                props?.setCarToCart(carObj);
            }  
            props.addSubPackage(carObj, selectedCityId,{...itemIdObj,subPackageName: code})
        } else {
            location.href = `/login?referrer=${location.pathname}?carId=${localStorage.getItem("carSelectedPackage")}&cityId=${localStorage.getItem("citySelectedPackage")}`
        }
    }

    if (serviceId) {
        return <MobilePageLayout pageName = {packageData[0] && packageData[0]["label"]}>
            {
            (!(localStorage.getItem("citySelectedPackage") && localStorage.getItem("carSelectedPackage"))) ? 
                <CarCityFilter 
                    fetchData = {(filter) => {
                        props.fetchPackageById(params["type"], filter)
                    }}
                /> :
                <MServiceListWrapper>
                {
                    props.packages[serviceId].map(pack => {
                        return pack.id == serviceKeyId ? pack.packages.map(subPacks => {
                            const { name, serviceTime, images, price, code, services } = subPacks;
                            return <ServiceListCard key = {code}>
                                <ServiceListCardWrapper href = {`/service-description/${serviceId}/${serviceKeyId}/${code}`}>
                                <LeftDiv>
                                    <ServiceListImages src={images ? images[0] : PackageImage[pack["label"]]} alt="image" />
                                    <CostPara>Rs.{price}</CostPara>
                                </LeftDiv>
                                <RightDiv>
                                    <PackagesDetails>
                                        <PackageName>{name}</PackageName>
                                        <TimerPara>
                                            <TimerIcon style = {{color: "#4B4B4B", fontSize:"12px", marginRight: "5px"}}/>
                                            {serviceTime > 0 ? serviceTime / 60 : 0}hour
                                        </TimerPara>

                                        
                                        {services[0] && <ServiceMenu>{services[0]}<TickImg src= {Tick}/></ServiceMenu>}
                                        {services[1] && <ServiceMenu>{services[1]}<TickImg src= {Tick}/></ServiceMenu>}
                                        {services[2] && <ServiceMenu>{services[2]}<TickImg src= {Tick}/></ServiceMenu>}
                                        {services.length - 3 > 0 ? <ServiceCount>+{services.length - 3} more services</ServiceCount> : ""}
                                    </PackagesDetails>
                                </RightDiv>
                                </ServiceListCardWrapper>
                                <ButtonDiv>
                                    <ListImg src =  {Lists} />
                                    <AddButton onClick = {() => addToCart(code)}>Add</AddButton>
                                    {/* <AddButton onClick ={() => {
                                        userId ? props.addSubPackage(matchedCarData, selectedCityId,{...itemIdObj,subPackageName: code}) : 
                                        location.href = `/login?referrer=${location.pathname}?carId=${localStorage.getItem("carSelectedPackage")}&cityId=${localStorage.getItem("citySelectedPackage")}`
                                        console.log(props?.loadingError)
                                    }}>
                                    Add</AddButton> */}
                                </ButtonDiv>
                            </ServiceListCard>
                        }) : null
                    })
                }
                {showCarMisMatchWarning && carMisMatchWarningPopup()}     
            </MServiceListWrapper>
        }

        <FloatingCarDetails 
            car = {`${matchedCarData?.["brand"]} ${matchedCarData?.["carName"]}`} 
            variantName = {matchedCarData?.variantName}
        />
        </MobilePageLayout>
    }

}


const mapStateToProps = (state) => {
    return {
        inProgress: state?.packages?.["inProgress"],
        packages: state?.packages?.["packages"],
        subPackages: state?.subPackages?.subPackageLabel,
        profile: state?.profile,
        loadingError: state?.loading?.error,
        cart: state?.cart?.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPackageById: (packageId = "", filter = {}) => { dispatch(fetchPackageById(packageId, filter)) },
        addSubPackage: (car = {},cityId= "",itemIdObj ={}) => { dispatch(addSubPackage(car,cityId,itemIdObj)) },
        setCarToCart: (carObject ={}) => {dispatch(setCarToCart(carObject))}
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServiceList));
