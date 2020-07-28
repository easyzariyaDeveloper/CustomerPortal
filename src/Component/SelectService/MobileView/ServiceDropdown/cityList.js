import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {CityListWrapper, CityCard} from './style';
import { fetchCities } from "../../Data/action";
import { readCookie } from "../../../../util";
import CityImage from "../../../../Assets/img/cityImage.jpg"
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
                    {userId ? props.profileAddress.map(({cityId,city}) =>{
                        return <CityCard onClick = {()=>{
                                setSelectedCityId(cityId);
                                localStorage.setItem("citySelectedPackage", cityId);
                                props.onChange(city.cityId);
                            }}
                            enabled = {city.cityId === selectedCityId}
                        >
                            <img src = {CityImage}></img>
                            <h1>{city}</h1>
                        </CityCard>
                    }): (!props.inProgress && props.cities ? props.cities.map(city =>{
                        return <CityCard onClick= {(event)=>{
                            event.stopPropagation();
                            setSelectedCityId(city.cityId);
                            localStorage.setItem("citySelectedPackage", city.cityId);
                            props.onChange(city.cityId);
                        }}
                            enabled = {city.cityId === selectedCityId}
                        >
                            <img src = {CityImage}></img>
                            <h1>{city.cityName}</h1>
                        </CityCard>
                    }):null)}
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