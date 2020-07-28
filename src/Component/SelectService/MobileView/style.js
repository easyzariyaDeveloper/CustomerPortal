import styled from "styled-components";
import ScrollTab from "./MTab";
import { base_spacing, EZFontMediumSize, ez_button_color, white_color } from "../../../Assets/style-var";
import { EZCard } from "../../Common/MobileCard";

export const ServiceMPageWrapper = styled.div``;


export const MTab = styled(ScrollTab)`
    background: rgba(30, 62, 108, 0.04);
`;

export const Label = styled.label`
    text-align: left;
    margin: 0 ${base_spacing}px;
    font-size: ${base_spacing *1.5}px;
    float: left;
`;

export const OverlayCard = styled(EZCard)``;

export const CarWrapper = styled.div``;

export const OverlayLabel = styled.h1`
    padding: ${base_spacing}px;
    font-size: ${base_spacing*2}px;
`;

export const CityWrapper = styled.div``;

export const FilterButton = styled.button`
    border: none;
    border-radius: 5px;
    text-align: center;
    background: ${ez_button_color};
    color: ${white_color};
    font-size: ${base_spacing *1.5}px;
    padding: ${base_spacing/2}px;
    margin: ${base_spacing*3}px auto ${base_spacing}px;
    width: 80%;
    display: block;
`;

export const RightNavigator = styled.img`
    float: right;
    height: ${base_spacing*1.5}px;
    margin: ${base_spacing}px;
`;

export const LeftNavigator = styled.img`
    float: left;
    height: ${base_spacing*1.5}px;
    margin: ${base_spacing}px;
`;

export const PencilIcon = styled.img`
    height: ${base_spacing*2.5}px;
    position: fixed;
    bottom: ${base_spacing*6.5}px;
    right:${base_spacing*3}px;
    z-index:2;
`;
