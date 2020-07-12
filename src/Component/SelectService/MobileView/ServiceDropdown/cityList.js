import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useStyles, CityListWrapper} from './style';
import { fetchCities } from "../../Data/action";


function CityList(props) {
    const classes = useStyles();
    const [city, setCity] = useState("");

    useEffect(()=>{
        props.fetchCities();
    },[]);

    return <CityListWrapper>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={city}
          onChange={(event) => {
              setCity(event.target.value)
              props?.onChange(event.target.value);
            }
        }>
          {!props.inProgress && props.cities? props.cities.map(city =>{
              return <MenuItem value ={city.cityId}>{city.cityName}</MenuItem>
          }):null}
        </Select>
      </FormControl>   
    </CityListWrapper>
}     

const mapStateToProps = (state) => {
    return {
        inProgress: state?.cityList?.inProgress,
        cities: state?.cityList?.cities
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchCities: () => {dispatch(fetchCities())},
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CityList);