import React, { useState, useEffect, useRef } from "react";
import { SwitchWrapper, CarListWrapper} from "./style";

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
import { Label } from "../style";



function CarList(props) {
    const classes = useStyles();
    const [car, setCar] = useState(props.value);

    const[radio, setRadio] = useState("personal");
    const [carList, setCarList] = useState([]);
    const userId = readCookie("userUUId");
    useEffect(() => {
        props.fetchCar();
    }, []);

    if(userId){
        useEffect(() => {
            if(props.cars.length > 0 && radio == "all") {
                setCarList(props.cars.map((car) => {
                    return { name: car.model, value: car.id }
                }));
            } else if(props?.profileCars.length > 0 && radio == "personal"){
                setCarList(props.profileCars.map(({carName, carId}) => {
                    return {name: carName, value: carId}
            }));
        }
    },[radio, props.cars.length, props.profileCars.length]);
    }
    else{
        useEffect(()=>{
            if(props.cars.length > 0){
                setCarList(props.cars.map((car) => {
                    return { name: car.model, value: car.id }
                }));
            }
            
        },[props.cars.length]);
    }



    return <CarListWrapper>

        {userId ? (props.profileCars ? <RadioGroup row value={radio} onChange={(event)=> setRadio(event.target.value)}>
            <FormControlLabel value="personal" control={<Radio/>} label="Personal" />
            <FormControlLabel value="all" control={<Radio/>} label="All" />
        </RadioGroup> : null) : null}
        
            
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Car</InputLabel>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={car}
            onChange={(event)=> {
                setCar(props.value)
                sessionStorage.setItem("carSelectedPackage", event.target.value);
                props.onChange(event.target.value);
        }}>
            {carList.map(car =>{
                return <MenuItem value ={car.value}>{car.name}</MenuItem>
            })}
        </Select>
        </FormControl> 
           
    </CarListWrapper>
}   


const mapStateToProps = (state) => {
    return {
        inProgress: state?.carList?.inProgress,
        cars: state?.carList?.car,
        profileCars: state?.profile?.carList || []
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchCar: () => {dispatch(fetchCar())},
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CarList);