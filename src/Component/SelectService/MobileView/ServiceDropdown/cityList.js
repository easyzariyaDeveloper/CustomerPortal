import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {CityListWrapper, CityCard, CityIcon, CityName} from './style';
import { fetchCities } from "../../Data/action";
import { readCookie } from "../../../../util";
import Skeleton from '@material-ui/lab/Skeleton';


function CityList(props) {
    const [selectedCityId, setSelectedCityId] = useState(props.value);
    const [city, setCity] = useState([]);
    const userId = readCookie("userUUId");
    
    useEffect(()=>{
        props.fetchCities();
    },[]);

    useEffect(() => {
        if(userId){
            const cityMap = props?.profileAddress?.reduce((accumlator, {cityId, city}) => {
                if(!accumlator[cityId]){
                    accumlator[cityId] = {cityId, cityName: city};
                }
                return accumlator;
            }, {});
       

            Object.values(cityMap).length > 0 ?  setCity(Object.values(cityMap)) : setCity(props?.cities)
            console.log(Object.values(cityMap))
        } else {
            setCity((props?.cities || []).filter(({active}) => active));
        }
    }, [userId && props?.profileAddress?.length, props?.cities?.length,props?.cities])

    return <div>
        {
            props?.inProgress ? <Skeleton animation="wave" height={250} width = {250}  /> :(
                <CityListWrapper>
                    {
                        city.map(({cityId, cityName}) => {
                            return <CityCard 
                                onClick = {() => {
                                    setSelectedCityId(cityId);
                                    localStorage.setItem("citySelectedPackage", cityId);
                                    props.onChange(cityId);
                                }}
                                enabled = {cityId === selectedCityId}
                            >
                                <CityIcon 
                                    className = {`icon-${cityName?.split(" ").join("-").toLowerCase()}`} 
                                    enabled = {cityId === selectedCityId}
                                />
                                <CityName enabled = {cityId === selectedCityId}>
                                    {cityName}
                                </CityName>
                            </CityCard>
                        })
                    }
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