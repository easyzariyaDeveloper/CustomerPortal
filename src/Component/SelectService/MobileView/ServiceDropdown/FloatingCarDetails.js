import React, { useState } from "react";
import CarIcon from "../../../../Assets/img/carIcon.svg";
import { SelectedCarIcon, SelectedCarCard } from "./style";


export default function FloatingCarDetails(props){

    const[carDetailsVisibility, setCarDetailsVisibility]= useState(false);

    return <>
        <SelectedCarIcon src= {CarIcon} onClick = {()=> setCarDetailsVisibility(!carDetailsVisibility)} bottomPosition = {props.bottomPosition}/>
        <SelectedCarCard visibility = {carDetailsVisibility}>
            <p>{props.car}</p>
            <p style = {{"textTransform": "capitalize", "marginTop": "10px"}}>{props?.variantName?.toLowerCase()}</p>
        </SelectedCarCard>
    </>
}