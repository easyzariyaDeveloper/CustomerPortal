import React, { useState, useEffect, useRef } from "react";
import { SwitchWrapper, CarListWrapper, CircularLoading} from "./style";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import { connect } from "react-redux";
import { fetchCar } from "../../Data/action";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useStyles} from './style';
import { readCookie } from "../../../../util";
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchBrandForCars, fetchCarListByBrand } from "../../../AddCar/Data/action";



function CarList(props) {
    const classes = useStyles();

    const [vehicle,setVehicle] = useState({
        brand:"",
        model:"",
        type:"",
        fuelType: "",
    });

    const [car, setCar] = useState("");

    const[radio, setRadio] = useState("personal");
    const userId = readCookie("userUUId");

    useEffect(() => {
        props.fetchBrandForCars();
    }, []);


    return <CarListWrapper>

        {userId ? (props.profileCars ? <RadioGroup style ={{paddingLeft:"13px"}}row value={radio} onChange={(event)=> setRadio(event.target.value)}>
                <FormControlLabel value="personal" control={<Radio/>} label="Personal" />
                <FormControlLabel value="all" control={<Radio/>} label="All" />
        </RadioGroup> : null) : null}
        
            
        {
            userId ?
            (radio == "all" ? 
            <div>
            <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Select Brand</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={vehicle.brand}
                onChange={(event) => {
                    setVehicle({...vehicle,brand: event.target.value});
                    props.fetchCarListByBrand(event.target.value)
                }}
                autoWidth
                >   
                {props.inProgress? <CircularProgress style={{height:"25px", width:"25px"}}/>: !props.inProgress && props.brands? props.brands.map((carBrand) =>{
                    return <MenuItem value = {carBrand} key = {carBrand}>{carBrand}</MenuItem>
                }) :null}
            </Select>
        </FormControl>
                
        <FormControl className={classes.formControl} disabled = {vehicle.brand==""}>
            <InputLabel id="demo-simple-select-label">Select Model</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={vehicle.model}
                onChange= {(event)=> {setVehicle({...vehicle, model :event.target.value})
                    localStorage.setItem("carSelectedPackage", event.target.value);
                    props.onChange(event.target.value);
            }}
                autoWidth
            >   
            {props.models.inProgress ? <CircularProgress style={{height:"25px", width:"25px"}}/> : vehicle.brand !=="" && props.models.carModel ? props.models.carModel.map(({id,model})=>{
                return <MenuItem 
                    value = {id}
                    key = {id}
                    >
                        {model}
                    </MenuItem>  
            })
            : undefined}
            </Select>
        </FormControl> 

        <FormControl className={classes.formControl} disabled = {vehicle.model == ""}>
            <InputLabel id="demo-simple-select-label">Select Fuel Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={vehicle.fuelType}
                onChange={(event)=> {setVehicle({...vehicle, fuelType :event.target.value})}}
                autoWidth
            >   
            {
                vehicle.model!=="" && props.models.carModel ? props.models.carModel.map(carType => {
                    return carType.id == vehicle.model ? carType.variants.map(variantElement=>{
                        return <MenuItem 
                            value = {variantElement.id}
                            key = {variantElement.id}
                            >
                                {variantElement.fuelType}
                            </MenuItem>
                    }) :null
                }):undefined
            }
            </Select>
        </FormControl>


        <FormControl className={classes.formControl} disabled ={vehicle.model == ""}>
            <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={vehicle.type}
                onChange={(event)=> {setVehicle({...vehicle, type :event.target.value})}}
                autoWidth
            >
                {
                    vehicle.fuelType!=="" && props.models.carModel ? props.models.carModel.map(carType=>{
                        return carType.id == vehicle.model ? carType.variants.map(variantElement => {
                            return variantElement.id == vehicle.fuelType  ?  variantElement.subCategory.map(type=> {
                            return <MenuItem value = {type}>{type}</MenuItem> }):null
                    }):null
                }):undefined
            }
            </Select>
        </FormControl>
        
        </div> : 
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Your Car</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={car}
            onChange={(event)=> {
                setCar(event.target.value)
                localStorage.setItem("carSelectedPackage", event.target.value);
                props.onChange(event.target.value);
        }}>
            {props?.profileCars?.map(car =>{
                return <MenuItem value ={car.carId}>{car.carName}</MenuItem>
            })}
        </Select>
        </FormControl>):
        <div>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Brand</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={vehicle.brand}
            onChange={(event) => {
                setVehicle({...vehicle,brand: event.target.value});
                props.fetchCarListByBrand(event.target.value)
            }}
            autoWidth
            >   
            {props.inProgress? <CircularProgress style={{size: 10}}/>: !props.inProgress && props.brands? props.brands.map((carBrand) =>{
                return <MenuItem value = {carBrand} key = {carBrand}>{carBrand}</MenuItem>
            }) :null}
        </Select>
    </FormControl>
            
    <FormControl className={classes.formControl} disabled = {vehicle.brand==""}>
        <InputLabel id="demo-simple-select-label">Select Model</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={vehicle.model}
            onChange= {(event)=> {setVehicle({...vehicle, model :event.target.value})
                localStorage.setItem("carSelectedPackage", event.target.value);
                props.onChange(event.target.value);
        }}
            autoWidth
        >   
        {vehicle.brand !=="" && props.models.carModel ? props.models.carModel.map(modelVariant=>{
            return <MenuItem 
                value = {modelVariant.id}
                key = {modelVariant.id}
                >
                    {modelVariant.model}
                </MenuItem>  
        })
        : undefined}
        </Select>
    </FormControl> </div> 

        }
        
           
    </CarListWrapper>
}   


const mapStateToProps = (state) => {
    return {
        inProgress: state?.brands?.inProgress,
        brands: state?.brands?.brands ||[],
        models: state?.cars,
        profileCars: state?.profile?.carList || [],
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchBrandForCars: () => { dispatch(fetchBrandForCars())},
        fetchCarListByBrand: (brand ="") => { dispatch(fetchCarListByBrand(brand)) },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CarList);