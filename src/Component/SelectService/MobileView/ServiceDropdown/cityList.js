import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {CityListWrapper, CityCard} from './style';
import { fetchCities } from "../../Data/action";
import { readCookie } from "../../../../util";
import CityImage from "../../../../Assets/img/cityImage.jpg"



function CityList(props) {
    const [city, setCity] = useState(props.value);
    const userId = readCookie("userUUId");
    useEffect(()=>{
        props.fetchCities();
    },[]);

    return <CityListWrapper>
        {
            userId ? props.profileAddress.map(({cityId,city}) =>{
                return <CityCard onClick = {()=>{
                    setCity(cityId);
                    localStorage.setItem("citySelectedPackage", cityId);
                    props.onChange(city.cityId);
                }}>
                    <img src = {CityImage}></img>
                    <h1>{city}</h1>
                </CityCard>
            }): (!props.inProgress && props.cities ? props.cities.map(city =>{
                return <CityCard onClick= {(event)=>{
                    event.stopPropagation();
                    setCity(city.cityId);
                    localStorage.setItem("citySelectedPackage", city.cityId);
                    props.onChange(city.cityId);
                }}>
                    <img src = {CityImage}></img>
                    <h1>{city.cityName}</h1>
                </CityCard>
            }):null)
        }
    </CityListWrapper>
}     

const mapStateToProps = (state) => {
    return {
        inProgress: state?.cityList?.inProgress,
        cities: state?.cityList?.cities,
        profileAddress: state?.profile?.addressList
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        fetchCities: () => {dispatch(fetchCities())},
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CityList);