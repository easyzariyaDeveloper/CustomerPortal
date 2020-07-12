import React, { useState, useEffect } from "react";
import Switch from 'react-ios-switch';
import { SwitchWrapper, Label, CarListWrapper} from "./style";

import { connect } from "react-redux";
import { fetchCar } from "../../Data/action";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useStyles} from './style';



function CarList(props) {
    const classes = useStyles();
    const [car, setCar] = useState('');
    const [carSwitch, setCarSwitch] = useState(false);
    const [carList, setCarList] = useState([]);

    console.log(carList)

    useEffect(() => {
        props.fetchCar();
    }, []);

    useEffect(() => {
        if(props.cars.length > 0 && carSwitch) {
            setCarList(props.cars.map((car) => {
                return { name: car.model, value: car.id }
            }));
        } else if(props?.profileCars.length > 0 && !carSwitch){
            setCarList(props.profileCars.map(({carName, carId}) => {
                return {name: carName, value: carId}
            }));
        }
    },[carSwitch, props.cars.length, props.profileCars.length]);

    return <CarListWrapper>
        <SwitchWrapper >
            <Label>Your Car</Label>
            <Switch
                checked={carSwitch}
                handleColor={"#1DA0BC"}
                offColor={"#FFFFFF"}
                onColor={"#FFFFFF"}
                style={{
                    "boxShadow": "0 1px 6px rgba(32, 33, 36, 0.28)"
                }}
                onChange={() => {setCarSwitch(!carSwitch)
                    setCar('')}
                }
            />
            <Label>All Cars</Label>
        </SwitchWrapper>

        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select Car</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={car}
          onChange={(event)=> {
            setCar(event.target.value)
            props?.onChange(event.target.value)}
          }
        >
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