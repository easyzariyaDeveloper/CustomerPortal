import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {CityListWrapper, CityCard, CityIcon, CityName} from './style';
import { fetchCities } from "../../Data/action";
import { readCookie } from "../../../../util";
import Skeleton from '@material-ui/lab/Skeleton';


function CityList(props) {
    const [selectedCityId, setSelectedCityId] = useState(props.value);
    const userId = readCookie("userUUId");
    
    useEffect(()=>{
        props.fetchCities();
    },[]);

    return <div>
        {
            props?.inProgress ? <Skeleton animation="wave" height={250} width = {250}  /> :(
                <CityListWrapper>
                    {userId && props.profileAddress ? props.profileAddress.map(({cityId,city}) =>{
                        return <CityCard onClick = {()=>{
                                setSelectedCityId(cityId);
                                localStorage.setItem("citySelectedPackage", cityId);
                                props.onChange(city.cityId);
                            }}
                            enabled = {city.cityId === selectedCityId}
                        >
                            <CityIcon 
                                className = {`icon-${city?.cityName?.split(" ").join("-").toLowerCase()}`} 
                                enabled = {city.cityId === selectedCityId}
                            />
                            <CityName
                                enabled = {city.cityId === selectedCityId}
                            >{city}</CityName>
                        </CityCard>
                    }): (!props.inProgress && props.cities ? props.cities.map(city => {
                        return <CityCard onClick= {(event)=>{
                            event.stopPropagation();
                            setSelectedCityId(city.cityId);
                            localStorage.setItem("citySelectedPackage", city.cityId);
                            props.onChange(city.cityId);
                        }}
                            enabled = {city.cityId === selectedCityId}
                        >
                            <CityIcon 
                                className = {`icon-${city?.cityName?.split(" ").join("-").toLowerCase()}`}
                                enabled = {city.cityId === selectedCityId}
                            />
                            <CityName
                                enabled = {city.cityId === selectedCityId}
                            >{city.cityName}</CityName>
                        </CityCard>
                    }):null)}

                    {/* {
                        (!props.inProgress && props.cities ? props.cities.map(city => {
                            return <CityCard onClick= {(event)=>{
                                event.stopPropagation();
                                setSelectedCityId(city.cityId);
                                localStorage.setItem("citySelectedPackage", city.cityId);
                                props.onChange(city.cityId);
                            }}
                                enabled = {city.cityId === selectedCityId}
                            >
                                <CityIcon 
                                    className = {`icon-${city?.cityName.split(" ").join("-").toLowerCase()}`}
                                    enabled = {city.cityId === selectedCityId}
                                />
                                <CityName
                                    enabled = {city.cityId === selectedCityId}
                                >{city.cityName}</CityName>
                            </CityCard>
                        }):null)
                    } */}
                </CityListWrapper>
            )
        }
        </div>
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