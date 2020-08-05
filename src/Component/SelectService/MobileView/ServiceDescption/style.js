import styled from "styled-components";
import { ez_button_color, ez_gradient_secondColor, base_spacing } from "../../../../Assets/style-var";
import { EZElevation, EZCard } from "../../../Common/MobileCard";
import "./style.scss";
import { mobile_header_height } from "../../../../Layout/MobileView/Header/styles";

export const SeviceDetailPageWrapper = styled.div`
    height: calc(100vh - ${mobile_header_height}px);
    overflow: auto;
    padding-bottom: ${mobile_header_height + 10}px;
`;

export const ImageContentDiv = styled.div`
    display: flex;
    justify-content: space-around;
    background: white;
    padding: 5px; 
    font-weight: 600;
`;

export const FeatureHeader = styled.h1`
    font-style:italic;
    font-weight: bold;
    font-size: 20px;
    line-height: 19px;
    padding: 10px;
    
`;

export const IndividualService = styled.p`
    line-height: 25px;
    margin-left: 20px;
    font-size: 14px;
`;

export const BottomDiv = styled.div`
    background: ${ez_gradient_secondColor};
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const AddServiceButton = styled.button`
    color: white;
    border: none;
    border-left: 1px solid white;
    background: ${ez_button_color};
    height: 100%;
    width: 50%;
    font-size: 17px;
    text-transform: uppercase;
`;

export const TimeDurationWrapper = styled.div`
    width: 50%;
    text-align: center;
`;

export const TickImage = styled.img`
    vertical-align: middle;
    margin-right: 5px;
`;

export const ServiceTimePara =  styled.p`
    color: white;
    display: inline-block;
    padding: 5px;
    font-size: 16px;
`;

export const FuelCardWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const FuelIcon = styled.p`
    font-size: ${base_spacing * 6.5}px;
`;

export const FuelCard = styled(EZCard)`
    margin: ${base_spacing}px;
    color: ${ez_button_color};
    padding: 0px;
    text-align: center;

    &.active{
        background: rgba(29,160,188,0.7);
        color: white;
    }
`;