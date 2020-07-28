import React, { useState } from "react";
import { OverLay } from "../../../Layout/styles";
import { CarWrapper, OverlayLabel, OverlayCard,CityWrapper, FilterButton, RightNavigator, LeftNavigator } from "./style";
import RightIcon from "../../../Assets/img/rightIcon.png";
import LeftIcon from "../../../Assets/img/leftIcon.png";

import CarList from "./ServiceDropdown/carList";
import CityList from "./ServiceDropdown/cityList";


export default function CarCityFilter(props){
    const [filterVisibility, setFilterVisibility] = useState(true);
    const [filter, setFilter] = useState({
        carId: "",
        cityId: "",
    });

    function setValueInFilter(type = "", value = ""){
        const latestFilter = {
            ...filter,
            [type]: value
        };
        setFilter(latestFilter);
    }

    return <OverLay>
            <OverlayCard>
                {filterVisibility? <CarWrapper>
                    <RightNavigator src = {RightIcon} onClick={()=> setFilterVisibility(!filterVisibility)}></RightNavigator>
                    <OverlayLabel>Select Car</OverlayLabel>
                    <CarList onChange = {value => {setValueInFilter("carId", value)}} value={filter.carId}/>
                    <FilterButton onClick={()=> setFilterVisibility(!filterVisibility)}>Next</FilterButton>
                </CarWrapper > : <CityWrapper>
                    <LeftNavigator src = {LeftIcon} onClick={()=> setFilterVisibility(!filterVisibility)}></LeftNavigator>
                    <OverlayLabel>Select City</OverlayLabel>
                    <CityList  onChange = {value => {setValueInFilter("cityId", value)}} value={filter.cityId} />
                    <FilterButton onClick={()=> {
                        props.fetchData(filter)
                    }}> Done </FilterButton>
                </CityWrapper>}
            </OverlayCard>
        </OverLay>
}